import React, {useState, useEffect} from 'react'
import getIPs from '../../functions/getIPs';

const IPAddressPage = (props) => {


  const [myAddress, setMyAddress] = useState('');

  const loadAddress = async () =>  {

    let data = await getIPs(1000);
    setMyAddress(JSON.stringify(data));
    props.onGetIp(JSON.stringify(data));
  };


  useEffect(() => {
    loadAddress();
  }, []);

  return (
    <div className='ip-address-box'>
      PUBLIC IP : {myAddress}
    </div>
  )
}

export default IPAddressPage