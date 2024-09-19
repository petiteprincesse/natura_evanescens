import "./Animals.scss";
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
    label: "Отряд",
    children: (
      <>
        Насекомоядные - <i>Eulityphla</i>
      </>
    ),
  },
  {
    key: "2",
    label: "Семейство",
    children: (
      <>
        Землеройковые - <i>Soricidae</i>
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
    label: "Отряд",
    children: (
      <>
        Рукокрылые - <i> Chiroptera</i>
      </>
    ),
  },
  {
    key: "2",
    label: "Семейство",
    children: (
      <>
        Гладклоносые летучие мыши - <i>Vespertilionidae</i>
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
    label: "Отряд",
    children: (
      <>
        Насекомоядные - <i> Chiroptera</i>
      </>
    ),
  },
  {
    key: "2",
    label: "Семейство",
    children: (
      <>
        Ежиные - <i>Vespertilionidae</i>
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


const firstAnimal = (
  <>
    <Row>
      <Col sm={12}></Col>
      <Col sm={12}>
        <Search allowClear enterButton="Search" size="small" />
      </Col>
    </Row>
    <Row justify="center" style={{ marginTop: "2rem" }}>
      <Col span={7}>
        <Card hoverable title="Обыкновенная кутора" bordered={false}>
          <Descriptions column={1} items={items}></Descriptions>
          <div className="img">
            <img
              src="https://treefrog.ru/wp-content/uploads/images/stories/OmelkoVE/kutora/Neomys-fodiens.jpg"
              style={{ width: "100%", height: "230px" }}
            />
          </div>
        </Card>
      </Col>
      <Col span={1}></Col>
      <Col span={7}>
        <Card hoverable title="Ночница Брандта" bordered={false}>
          <Descriptions column={1} items={items1}></Descriptions>
          <div className="img">
            <img
              src="https://avatars.dzeninfra.ru/get-zen_doc/3381150/pub_63083af838df5573291a9b91_63083b3e6aa80b6e972e0335/scale_1200"
              style={{ width: "100%", height: "230px" }}
            />
          </div>
        </Card>
      </Col>
      <Col span={1}></Col>
      <Col span={7}>
        <Card hoverable title="Белогрудый Еж" bordered={false}>
          <Descriptions column={1} items={items2}></Descriptions>
          <div className="img">
            <img
              src="https://i.pinimg.com/736x/75/d7/19/75d7196fa665a7ccce648b8df1d91029.jpg"
              style={{ width: "100%", height: "230px" }}
            />
          </div>
        </Card>
      </Col>
    </Row>
  </>
);

function Animals() {
  const items = [
    {
      key: "1",
      label: "Млекопитающие",
      children: firstAnimal,
    },
    {
      key: "2",
      label: "Птицы",
      children: "Информация появится позже",
    },
    {
      key: "3",
      label: "Пресмыкающиеся и земноводные",
      children: "Информация появится позже",
    },
    {
      key: "4",
      label: "Рыбы",
      children: "Информация появится позже",
    },
    {
      key: "5",
      label: "Беспозвоночные",
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
          <span>Обитатели парка</span>
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

export default Animals;
