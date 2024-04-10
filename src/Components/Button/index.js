import { Button, Flex } from 'antd';
import Style from '../Button/style';
import Link from 'antd/es/typography/Link';


export default function Button_hero (){
    return(
        <Style>
        <Flex gap="large" wrap="wrap">
      <Button  type="primary">Action</Button>
        <Button type="primary">Drama</Button>
        <Button type="primary">Animation</Button>
        <Button type="primary">Romance</Button>
        <Button type="primary">Crime</Button>
        <Button type="primary">History</Button>
        <Button type="primary">Comedyn</Button>
        <Button type="primary">Family</Button>
      </Flex>
      <div className="over-flow ant-flex-img">
        <img className="size-img" src="https://cdn.gapfilm.ir/media/images/ad/Nowruz1403WebSlider.png" alt="poster "/>
      </div>
      </Style>
    )
}