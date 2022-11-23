import React from 'react'
import styled from 'styled-components';
import {Account} from '../../interfaces';

import './index.scss';


type Props = {
    d: Account;
    key: number;
};

const ItemContainer = styled.div`
  height: 150px;
  max-width: 220px;
  min-width: 200px;
  flex: 1 0 180px;
  color: white;
  background: black;
  border-width: 1px;
  border-radius: 8px;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  padding:16px;
  position:relative;
`;
export const AccountItem: React.FC<Props>= ({d}) => {
  return (
    <ItemContainer>
        <ItemContent>
            <div className="flex-row">
                <img src={d.imgURL} className="currencyIcon"/>
                <p className="currencyTitle"> {d.name} </p>
            </div>
            <div className="flex-row">
                <div className="accountBalance">
                    <div className="flex-row">
                        <p>{d.currency === "NGN" ? "₦" : ""} {d.balance}{" "} </p>
                        <p className="accountCurrency">{d.currency === "NGN" ? "" : d.currency}</p>    
                    </div>
                </div>
            </div>
            <div className="fclex-row">
                <div className="arrow-right-frame">
                    <div className="arrow-right">
                        <i className="fa-solid fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        
        </ItemContent>
    </ItemContainer>
  )
}


