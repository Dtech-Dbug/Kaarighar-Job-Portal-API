import React from 'react';
import { Spin, Space } from 'antd';

const Loading = () =>{
    return(
        <div class="flex h-screen">
  <div class="m-auto">
      <Space size="center">
            <Spin size="large" />
        </Space>
  </div>
</div>
        
    )
};

export default Loading;