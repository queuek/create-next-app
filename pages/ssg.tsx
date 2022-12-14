import { NextPage, GetStaticProps, NextPageContext } from "next";
import Link from "next/link";
import Head from "next/head";

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはSSGでBuild時に生成されたページです</p>
        {props.message}
        <br />
        <Link href="/">
          <a>Topへ戻る</a>
        </Link>
        <br />
        <Link href={{ pathname: "/", query: { sample: "XXX" } }}>
          <a>ハッシュ付きでTopへ戻る</a>
        </Link>
        <br />
        <Link href="/">
          <button>Topへ戻るボタン</button>
        </Link>
      </main>
    </div>
  );
};

// Build時に実行され、事前にデータがページに適用される（SSG）
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  // contextはNextからBuild時に自動で渡される
  //   console.log(context);
  // Build時のタイムスタンプ
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}にgetStaticPropsが実行されました`;
  //   console.log(message);
  return {
    props: { message },
  };
};

export default SSG;
