import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import { Row, Col } from "reactstrap";
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { SEO, Skeleton } from '../../components';
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/Home.module.css';

export default function Instock() {
  const { axios } = useStoreApi();
	const router = useRouter();
  const [load, setLoad] = useState(true);
	const [datas, setDatas] = useState([
		{
		  text:"JWICK T1 Stem Switch (Tactile - PCB Mount)",
		  buy_text:"https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount",
		  image:"/assets/temp/switch1.jpeg",
			price:"Rp.4.500"
		},
		{
		  text:"JWICK Black Switch (Linear - PCB Mount) - 58.5g",
		  buy_text:"https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g",
		  image:"/assets/temp/switch2.jpeg",
			price:"Rp.3.000"
		},
		{
		  text:"Gateron Yellow (Linier - Plate Mount)",
		  buy_text:"https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount",
		  image:"/assets/temp/switch3.jpeg",
			price:"Rp.4.000"
		}
	]);

	const getData = async () => {
    try {
      const response = await axios.get("api/v1/instock/");
      await setDatas(response.data);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <SEO
        title="Updates | Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.titlePage}>
          <div className={styles.desc}>
            <h1 className={styles.title}>Updates</h1>
          </div>
            <Divider className={styles.updateDivider} />
        </div>
        <div className={styles.sectionInstock} style={{marginTop: "2px !important"}}>
          <h4 className={`${styles.updateTitle}`}>PBT Fans</h4>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>PBT Fans 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.left}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>PBT Fans 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.left}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>PBT Fans 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.left}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion><br/>

          <h4 className={`${styles.updateTitle}`}>Keyboard Kit</h4>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Keyboard Kit 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.left}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Keyboard Kit 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.left}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Keyboard Kit 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={`${styles.left}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <p className={`${styles.black} ${styles.backButton}`} style={{marginTop: "50px"}} onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</p>
        </div>
      </main>
    </div>
  )
}
