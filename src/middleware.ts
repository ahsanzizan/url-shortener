import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware(req) {}, {
  callbacks: {
    authorized: ({ req, token }) => {
      const pathname = req.nextUrl.pathname;
      if (pathname.startsWith("/admin") && !token) {
        return false;
      }
      return true;
    },
  },
});
