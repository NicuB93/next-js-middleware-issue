import { GetServerSideProps } from "next";

/** Add your relevant code here for the issue to reproduce */
export default function About() {
  return <>about page</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.res.statusCode);

  return {
    props: {},
  };
};
