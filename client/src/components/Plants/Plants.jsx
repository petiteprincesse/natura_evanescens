import "./Plants.scss";
import {
  Input,
  Col,
  Row,
  Collapse,
  Carousel,
  Card,
  Statistic,
  Descriptions,
} from "antd";
const { Search } = Input;

const items = [
  {
    key: "1",
    label: "Порядок",
    children: (
      <>
        Плауновые - <i>Eulityphla</i>
      </>
    ),
  },
  {
    key: "2",
    label: "Семейство",
    children: (
      <>
        Плауновые - <i>Soricidae</i>
      </>
    ),
  },
  {
    key: "3",
    label: "Статус",
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        obcaecati voluptatibus nulla magni alias aspernatur velit impedit
        quidem, eum accusamus sapiente libero? Nobis assumenda et accusamus ea
        distinctio quam eos? In assumenda sit vitae libero ut nulla, dolore
        eligendi alias ipsa porro modi illum possimus nemo sunt quaerat ullam
        quibusdam culpa magnam molestias odio ea rem repellendus ex excepturi.
      </>
    ),
  },
];

const items1 = [
  {
    key: "1",
    label: "Порядок",
    children: (
      <>
        Хвощовые - <i> Chiroptera</i>
      </>
    ),
  },
  {
    key: "2",
    label: "Семейство",
    children: (
      <>
        Хвощовые - <i>Vespertilionidae</i>
      </>
    ),
  },
  {
    key: "3",
    label: "Статус",
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        obcaecati voluptatibus nulla magni alias aspernatur velit impedit
        quidem, eum accusamus sapiente libero? Nobis assumenda et accusamus ea
        distinctio quam eos? In assumenda sit vitae libero ut nulla, dolore
        eligendi alias ipsa porro modi illum possimus nemo sunt quaerat ullam
        quibusdam culpa magnam molestias odio ea rem repellendus ex excepturi.
      </>
    ),
  },
];

const items2 = [
  {
    key: "1",
    label: "Семейство",
    children: (
      <>
        Кувшинкоцветные - <i> Chiroptera</i>
      </>
    ),
  },
  {
    key: "2",
    label: "Семейство",
    children: (
      <>
        Кувшинковые - <i>Vespertilionidae</i>
      </>
    ),
  },
  {
    key: "3",
    label: "Статус",
    children: (
      <>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        obcaecati voluptatibus nulla magni alias aspernatur velit impedit
        quidem, eum accusamus sapiente libero? Nobis assumenda et accusamus ea
        distinctio quam eos? In assumenda sit vitae libero ut nulla, dolore
        eligendi alias ipsa porro modi illum possimus nemo sunt quaerat ullam
        quibusdam culpa magnam molestias odio ea rem repellendus ex excepturi.
      </>
    ),
  },
];


const firstPlant = (
  <>
    <Row>
      <Col sm={12}></Col>
      <Col sm={12}>
        <Search allowClear enterButton="Search" size="small" />
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: "2rem" }}>
      <Col span={7}>
        <Card hoverable title="Плаун годичный" bordered={false}>
          <Descriptions column={1} items={items}></Descriptions>
          <div className="img">
            <img
              src="https://kartinki.pibig.info/uploads/posts/2023-04/1681841619_kartinki-pibig-info-p-kartinka-plaun-arti-instagram-39.jpg"
              style={{ width: "100%", height: "230px" }}
            />
          </div>
        </Card>
      </Col>
      <Col span={1}></Col>
      <Col span={7}>
        <Card hoverable title="Хвощ ветвистый" bordered={false}>
          <Descriptions column={1} items={items1}></Descriptions>
          <div className="img">
            <img
              src="https://avatars.mds.yandex.net/i?id=6ffdb423599256f78943d39cb9b179f44964a80a-4567732-images-thumbs&n=13"
              style={{ width: "100%", height: "230px" }}
            />
          </div>
        </Card>
      </Col>
      <Col span={1}></Col>
      <Col span={7}>
        <Card hoverable title="Кувшинка белоснежная" bordered={false}>
          <Descriptions column={1} items={items2}></Descriptions>
          <div className="img">
            <img
              src="https://i.pinimg.com/736x/37/bf/5b/37bf5b43e7c127237849bd58e2471af4.jpg"
              style={{ width: "100%", height: "230px" }}
            />
          </div>
        </Card>
      </Col>
    </Row>
  </>
);

function Plants() {
  const items = [
    {
      key: "1",
      label: "Сосудистые растения",
      children: firstPlant,
    },
    {
      key: "2",
      label: "Моховидные",
      children: "Информация появится позже",
    },
    {
      key: "3",
      label: "Водоросли",
      children: "Информация появится позже",
    },
    {
      key: "4",
      label: "Лишайники",
      children: "Информация появится позже",
    },
    {
      key: "5",
      label: "Грибы",
      children: "Информация появится позже",
    },
  ];
  return (
    <>
      <Row
        style={{
          padding: "1rem",
          width: "100vw",
          backgroundColor: "#f6ffed",
        }}
        align="middle"
      >
        <Col sm={2}></Col>
        <Col className="main-text" style={{ marginBottom: "1rem" }}>
          <span>Растения и грибы</span>
        </Col>
        <Collapse
          accordion
          items={items}
          style={{ margin: "1rem", width: "100vw", marginTop: "0" }}
        />
      </Row>
    </>
  );
}

export default Plants;
