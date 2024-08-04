import grpc from "@grpc/grpc-js";
import loader from "@grpc/proto-loader";
import { logs } from "./logs.js";
import moment from "moment";

const PROTO_PATH = './logs.proto';

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const package_definition = loader.loadSync(PROTO_PATH, options);
const logs_proto = grpc.loadPackageDefinition(package_definition).logs;

const server = new grpc.Server();

server.addService(logs_proto.LogService.service, {
    getLogs(req, callback) {
        // console.log(req)
        const userId = req.request.UserId;
        const from = req.request.from;
        const to = req.request.to;

        const filteredLogs = logs.filter(log => 
            log.UserId === userId && 
            moment(log.createdAt).isAfter(moment(from)) &&
            moment(log.createdAt).isBefore(moment(to))
        );

        console.log( filteredLogs )

        callback(null, { logs: filteredLogs });
    }
});

server.bindAsync(
    "127.0.0.1:50051",
    grpc.ServerCredentials.createInsecure(),
    (error, port) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log("Server running at http://127.0.0.1:50051");
        server.start();
    }
);
