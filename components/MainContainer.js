import Head from "next/head";
import A from "./A";

const MainContainer = ({children, keywords}) => {
  return (
    <div>
      <Head>
        <meta keywords={'nextjs' + keywords}></meta>
        <title>NextJS</title>
      </Head>
      <div className="navbar">
        <A href={'/'} text='Main' />
        <A href={'/users'} text='Users' />
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`   
          .navbar {
            background: #80bfff;
            padding: 10px 20px;
            margin-bottom: 20px;
          }
        `}
      </style> 
    </div>
  );
};

export default MainContainer;