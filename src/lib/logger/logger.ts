import zwsLogger from "@zerka/zlogger";

const logger = new zwsLogger({
    destination: 'db',
    shouldConsole: true,
});

export default logger;