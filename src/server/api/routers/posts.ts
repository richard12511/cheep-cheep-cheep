import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const postsRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});
