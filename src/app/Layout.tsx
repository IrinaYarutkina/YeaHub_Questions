import { Container } from "@/shared/ui/container";
import { Header } from "@/widgets/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => (
  <div>
    <Header />
    <main>
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  </div>
);
