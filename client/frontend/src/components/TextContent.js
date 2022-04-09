import React from "react";
import ReactDOM from "react-dom";
import { Divider } from "antd";

function TextContent(props) {
  const style = {
    margin: "20px 40px",
  };

  return (
    <div>
      <p style={style}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue
        volutpat lacinia. Cras egestas tortor et est faucibus, in dapibus risus
        varius. Pellentesque sed tempor quam, ac condimentum dolor. Nullam a
        erat ipsum. Maecenas ultrices leo sed elit consectetur dapibus.
        Vestibulum ac nulla et augue auctor aliquet sit amet vel dui. Maecenas
        maximus, ex nec congue auctor, nunc tellus vehicula metus, vitae
        suscipit metus nunc eu eros. In ultricies, eros sit amet ullamcorper
        pretium, leo sem tincidunt mi, sed tempus libero ligula ac libero.
        Maecenas cursus dignissim lacus at sollicitudin. In placerat quam ut
        mauris consectetur efficitur. Fusce consectetur mollis interdum.
        Praesent eget tincidunt purus. Sed eu commodo ex. Aenean feugiat odio
        arcu, eu laoreet sem vehicula ut. Sed molestie, justo vitae pulvinar
        ornare, lorem dolor pharetra justo, sit amet tristique nisl mauris non
        ipsum. Donec eu ornare nibh, in eleifend erat.
      </p>
      <Divider>
        <b>Text</b>
      </Divider>
      <p style={style}>
        Cras sit amet tincidunt libero. Etiam sed ipsum ut leo imperdiet aliquam
        elementum a odio. Nam aliquam egestas nisi at fermentum. Fusce faucibus
        libero sed pharetra egestas. Praesent quis accumsan diam. Etiam pulvinar
        finibus velit, eget consequat tellus commodo in. Maecenas lacinia
        sagittis faucibus. Pellentesque vulputate eu quam sed suscipit. Sed
        ultrices elementum lectus et malesuada. Nam viverra elit elit, id
        pharetra ligula dictum vitae. Aliquam non tempor velit. Nunc tempor enim
        sem, quis tempus tellus lobortis at. Aliquam erat volutpat. Pellentesque
        est eros, fringilla eget dui ac, viverra sodales arcu.
      </p>
      <Divider>
        <b>Text</b>
      </Divider>
      <p style={style}>
        Nunc mollis commodo lorem eu sollicitudin. Nulla accumsan sapien et
        ultrices finibus. Integer fringilla, quam quis accumsan congue, risus
        velit auctor elit, a rhoncus felis metus a ipsum. In suscipit tortor sit
        amet elit laoreet, non dictum nisi interdum. In finibus sit amet sem ut
        tincidunt. Proin tempus eros sed euismod rutrum. Proin metus nibh,
        tempor eu pellentesque in, tincidunt vulputate risus. Quisque finibus,
        ipsum quis molestie maximus, eros orci ultrices nibh, a maximus neque
        lectus non sapien.
      </p>
      <Divider>
        <b>Text</b>
      </Divider>
      <p style={style}>
        Nulla non massa dui. Curabitur et malesuada odio, sed eleifend arcu.
        Suspendisse auctor sapien sed venenatis pellentesque. Ut posuere vitae
        urna non luctus. Nullam est sem, euismod ut odio eu, consectetur blandit
        velit. Donec quis mi dignissim, vestibulum diam id, fringilla leo. Donec
        nibh leo, consequat consectetur consectetur at, lacinia in quam.
        Suspendisse sagittis, nibh vel vehicula dapibus, ex est lacinia ligula,
        nec pulvinar quam purus quis sapien. Vestibulum id vulputate mi. Donec
        id tristique arcu. Sed et felis gravida, ultrices magna vitae, tempus
        est. Suspendisse diam ipsum, tincidunt non blandit vel, pulvinar rhoncus
        neque. Nam eu risus vel ligula aliquet posuere nec vel mauris. Fusce
        luctus volutpat fringilla.
      </p>
      <Divider>
        <b>Text</b>
      </Divider>
    </div>
  );
}

export default TextContent;
