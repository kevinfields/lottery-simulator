import React, {useState, useEffect} from 'react'
import getIPs from '../../functions/getIPs';

const IPAddressPage = (props) => {


  const [myAddress, setMyAddress] = useState('');

  const loadAddress = async () =>  {

    let data = await getIPs();
    setMyAddress(JSON.stringify(data));
    props.onGetIp(JSON.stringify(data));
  };


  useEffect(() => {
    loadAddress();
  }, [])
  return (
    <div className='page'>
      IP ADDRESS : {myAddress}
    </div>
  )
}

export default IPAddressPage