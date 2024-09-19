import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Map from "./pages/Map/Map";
import Area from "./pages/Area/Area";

function App() {
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Layout: {
              headerBg: "#d9f7be",
            },
            Select: {
              clearBg: "#d9f7be",
              optionActiveBg: "#d9f7be",
              optionSelectedBg: "#d9f7be",
              selectorBg: "#d9f7be",
              colorPrimaryHover: "#52c41a",
              colorPrimary: "#52c41a",
              fontSize: 22,
            },
            Button: {
              contentFontSize: 22,
              defaultActiveBorderColor: "#d9f7be",
              defaultActiveColor: "#d9f7be",
              defaultBorderColor: "#d9f7be",
              colorPrimary: "#d9f7be",
              defaultBg: "#95de64",
              defaultGhostBorderColor: "#b7eb8f",
              defaultGhostColor: "#b7eb8f",
              defaultHoverBg: "#b7eb8f",
              defaultHoverBorderColor: "#95de64",
              defaultHoverColor: "#092b00",
            },
            Input: {
              activeBorderColor: "#73d13d",
              hoverBorderColor: "#52c41a",
              colorPrimary: "#73d13d",
            },
          },
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Area />} />
              <Route path="/map" element={<Map />} />
              {/* <Route path="filters" element={<Filters />} />
                <Route path="patents">
                  <Route index element={<Patents />} />
                  <Route path="stats" element={<PatentsStat />} />
                </Route>
                <Route path="patent">
                  <Route path=":patent_kind">
                    <Route
                      path=":patent_reg_number"
                      element={<SinglePatent />}
                    />
                  </Route>
                </Route>
                <Route path="persons">
                  <Route index element={<Holders />} />
                  <Route path=":person_tax_number" element={<SingleHolder />} />
                  <Route path="stats" element={<HoldersStat />} />
                </Route> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
}

export default App;
