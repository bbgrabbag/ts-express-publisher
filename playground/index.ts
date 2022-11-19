import { server } from "./server";

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => {
  console.log(`Running playground server on port ${PORT}`);
});
