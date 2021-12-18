import * as React from "react";

import astyles from "./ItemDetails.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TradingHistory from "../tradingHistory";

import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "1rem",
};
function ItemDetails() {
  const [value, setValue] = React.useState("one");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      {" "}
      <Box sx={{ flexGrow: 1 }}>
        <Grid className={`${astyles.margintopofgrid}`} container spacing={2}>
          <Grid item lg={6} md={6} sm={10}>
            <Container>
              <div className={`${astyles.imagecontainerofdiv}`}>
                <img
                  className={`${astyles.imageofmonkey}`}
                  src="/images/monkey.png"
                />
              </div>
            </Container>
          </Grid>

          <Grid item lg={6} md={6} sm={10}>
            <div className={`${astyles.displayflex}`}>
              <div className={`${astyles.verticleline}`} />

              <Container>
                <div className={`${astyles.displayflex}`}>
                  <h1 className={`${astyles.headingtext}`}>
                    Abstact Smoke Red Blue
                  </h1>
                  <div className={`${astyles.hearts}`}>
                    <FavoriteIcon className={`${astyles.iconsheart}`} />
                    <p>92</p>
                  </div>
                </div>

                <div>
                  <p className={`${astyles.textunderheading}`}>
                    From <b>4.5 ETH. </b>
                    20 of 25 available
                  </p>
                </div>

                <div className={`${astyles.createrdiv}`}>
                  <p className={`${astyles.textunderheading}`}>Creator</p>
                </div>
                <div className={`${astyles.avatardiv} ${astyles.displayflex}`}>
                  <Avatar alt="Remy Sharp" src="/images/avatar1.png" />
                  <p className={`${astyles.titleofcreator}`}>Jean Benge</p>
                </div>
                <div>
                  <Box sx={{ width: "100%" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      textColor="secondary"
                      indicatorColor="secondary"
                      aria-label="secondary tabs example"
                      className={`${astyles.tabsfont}`}
                    >
                      <Tab value="one" label="Details"></Tab>
                      <Tab value="two" label="Offers" />
                      <Tab value="three" label="Attributes" />
                    </Tabs>
                    <div className={`${astyles.divsizetoless}`}>
                      <p className={`${astyles.fontfam}`}>
                       {
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
                        }
                      </p>
                    </div>
                  </Box>
                </div>

                <div className={`${astyles.marginTopofdivforbutton}`}>
                  <button
                    onClick={handleOpen}
                    className={`${astyles.buttonblue}`}
                  >
                    {" "}
                    Buy for 4.5 ETH
                  </button>
                  <button className={`${astyles.buttonblue12}`}>
                    {" "}
                    Make Offer
                  </button>
                </div>
              </Container>
            </div>
          </Grid>
        </Grid>
      </Box>
      <TradingHistory />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className={`${astyles.modalheading}`}>Check Out</h1>
          <hr className={`${astyles.hrline}`} />
          <Container>
            <div className={`${astyles.margintopdivofmodal}`}>
              <p className={`${astyles.margintopdivofmodaltext}`}>Item</p>
              <p className={`${astyles.margintopdivofmodaltext}`}>Subtotal</p>
            </div>
            <div className={`${astyles.margintopdivofmodal}`}>
              <div className={`${astyles.displayflex}`}>
                <div>
                  <img
                    className={`${astyles.imageofmonkeyformodal}`}
                    src="/images/monkey.png"
                  />
                </div>
                <div className={`${astyles.marginLeftofdiv}`}>
                  <p className={`${astyles.margintopdivofmodaltext}`}>
                    Jean Benge
                  </p>
                  <p className={`${astyles.margintopdivofmodaltext12}`}>
                    Abstact Smoke Red Blue
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={`${astyles.margintopdivofmodaltext}`}> 4.5 ETH</p>
              </div>
            </div>

            <div className={`${astyles.margintopdivofmodal}`}>
              <p className={`${astyles.margintopdivofmodaltext}`}>Total</p>
              <p className={`${astyles.margintopdivofmodaltext}`}>4.5 ETH</p>
            </div>
          </Container>
          <hr className={`${astyles.hrline12}`} />

          <Container>
            <div className={`${astyles.marginTopofdivforbutton1122}`}>
              <button onClick={handleOpen} className={`${astyles.buttonblue}`}>
                {" "}
                Buy for 4.5 ETH
              </button>
              <button className={`${astyles.buttonblue12}`}> Cancel</button>
            </div>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}

export default ItemDetails;
