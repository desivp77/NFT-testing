import Paper from "@mui/material/Paper";

import Link from "../link/Link";
import styles from "./Example.module.scss";
import classNames from "classnames"; 
import Header from "./Header.jsx";
import Avatar1 from "../avatar/Avatar.jsx";
import User from "../user/User.jsx";

export default function Copyright() {
  return (
    <div className={classNames(styles.wrapper)}>
      <Header/> 
      <Paper className={classNames(styles.paper)}>
          <Link href="/about" color="secondary">
            Hi
          </Link>
          <Avatar1/>
          {/* <User 
            name=""
            info=""
            avatar=""
            size="55"
            verified="false"
         /> */}
        </Paper>
    </div>
  );
}
