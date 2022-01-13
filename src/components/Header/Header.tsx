import React, { FC } from "react";
import { HiShoppingCart as CartIcon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import Badge from "../Badge/Badge";
import cl from "./Header.module.scss";
const Header: FC = () => {
  const {
    CartStore: { products: items },
  } = useStore();
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <div className={cl.wrapper}>
          <h1 className={cl.headerTitle}>
            <Link to="/">React Rolls</Link>
          </h1>
          <Link to="/cart">
            <Badge Icon={CartIcon} count={items.length > 0 ? items.length : null} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default observer(Header);
