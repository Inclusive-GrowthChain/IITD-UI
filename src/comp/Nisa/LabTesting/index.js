import { useState } from "react";
import { useQueries } from "@tanstack/react-query";

import { getLacTest, getLacTest2 } from "../../../actions/nisa";
import useModal from "../../../hooks/useModal";

import { TabNavItem, TabContent } from "../../UIComp/Tabs";
import Application from "../Modals/Application";
import AddNewTest from "../Modals/AddNewTest";
import DocImg from "../../Common/DocImg";
import Loader from "../../Common/Loader";
import Tab3 from "./Tab3";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const style = {
  backgroundColor: "#064420",
  color: "#fff",
  alignItems: "center",
  borderRadius: "5px",
  border: "none",
  padding: "0.25rem 1rem",
  width: "fit-content",
  fontSize: ".75rem",
  lineHeight: "1rem",
}

const h3Style = {
  fontSize: "22px",
  fontWeight: "800",
  color: "rgb(33, 37, 41)",
}

const LabTesting = () => {
  const [activeTab, setActiveTab] = useState("tab1")

  const { modal, updateModal, closeModal } = useModal()

  const [ { isLoading: isLoading1, data: testList, }, { isLoading: isLoading2, data: appList } ] = useQueries({
    queries: [
      {
        queryKey: ["nisa/lac-test"],
        queryFn: getLacTest,
      },
      {
        queryKey: ["nisa/lactest"],
        queryFn: getLacTest2,
      }
    ]
  })


  if (isLoading1 || isLoading2) return <Loader wrapperCls="loader-main-right" />

  return (
    <>
      <div className="item_Container">
        <div className="list_title">
          <div className="container-fluid">
            <div className="d-sm-flex justify-content-between align-items-center mb-4">
              <h3
                className="text-dark mb-0"
                style={h3Style}
              >
                Lab Testing
              </h3>
            </div>

            <div className="tabs_wrapper">
              <ul className="nav-tab">
                <TabNavItem
                  id="tab1"
                  title="Applications in Process"
                  className="mr-3"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  id="tab2"
                  title="Completed Applications"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <TabNavItem
                  id="tab3"
                  title="Tests Price List"
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </ul>

              <div className="outlet">
                <TabContent id="tab1" activeTab={activeTab}>
                  <Tab1
                    data={appList?.data?.filter(app => app.applicationStatus === "in-process")}
                    style={style}
                    updateModal={updateModal}
                  />
                </TabContent>

                <TabContent id="tab2" activeTab={activeTab}>
                  <Tab2
                    data={appList?.data?.filter(app => app.applicationStatus === "completed")}
                    style={style}
                    updateModal={updateModal}
                  />
                </TabContent>

                <TabContent id="tab3" activeTab={activeTab}>
                  <Tab3
                    data={testList?.data}
                    updateModal={updateModal}
                  />
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        modal.state === "showApp" &&
        <Application
          show
          data={modal?.data}
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showNewTest" &&
        <AddNewTest
          show
          handleClose={closeModal}
        />
      }

      {
        modal.state === "showImg" &&
        <DocImg
          show
          title={modal?.data?.title}
          imgUrl={modal?.data?.imgUrl}
          handleClose={closeModal}
        />
      }
    </>
  )
}

export default LabTesting
