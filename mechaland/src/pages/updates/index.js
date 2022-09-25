import "bootstrap/dist/css/bootstrap.min.css";
import { Divider } from 'antd';
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
	const [update1, setUpdate1] = useState([
    {
        "id": "528a8f03-90a4-4189-8682-a098552b5c81",
        "url": "https://mechaland-be.herokuapp.com/api/v1/updates/528a8f03-90a4-4189-8682-a098552b5c81/",
        "title": "ePBT Soju",
        "text": "The set was inspired by the Korean alcoholic drink, Soju. With a positive relationship with my love for soju and a negative tolerance level for alcohol, Expected to be ready to ship in two weeks (2022-09-17), Production completion progress reaches 70% (2022-09-08).",
        "category": "PBT Fans"
    },
    {
        "id": "69096a46-0dcb-4231-bad1-cf695a5dd945",
        "url": "https://mechaland-be.herokuapp.com/api/v1/updates/69096a46-0dcb-4231-bad1-cf695a5dd945/",
        "title": "ePBT Be The One",
        "text": "This keyset is heavily inspired by the IDE theme One Dark Pro. It's a PBT set kind of discrete with a composition potential using the several kits available. Also note that there is NorDe, FR, and BE kit, Expected to be ready to ship in two weeks (2022-09-17), Production completion progress reaches 95% (2022-09-08)",
        "category": "PBT Fans"
    },
    {
        "id": "4acbd163-88f3-47e3-8d18-e69721356810",
        "url": "https://mechaland-be.herokuapp.com/api/v1/updates/4acbd163-88f3-47e3-8d18-e69721356810/",
        "title": "ePBT Samurai keycaps set",
        "text": "ePBT RamenStop is a set inspired by small Japanese ramen shops. This set features plenty of cute iconic ramen shop novelties to fulfill your hunger for cute novelties, Sample confirmed, queued for production. (2022-06-06), Yellow color not accepted, making the third sample (2022-04-06).",
        "category": "PBT Fans"
    }
  ]);
	const [update2, setUpdate2] = useState([
    {
        "id": "528a8f03-90a4-4189-8682-a098552b5c81",
        "url": "https://mechaland-be.herokuapp.com/api/v1/updates/528a8f03-90a4-4189-8682-a098552b5c81/",
        "title": "ePBT Soju",
        "text": "The set was inspired by the Korean alcoholic drink, Soju. With a positive relationship with my love for soju and a negative tolerance level for alcohol, Expected to be ready to ship in two weeks (2022-09-17), Production completion progress reaches 70% (2022-09-08).",
        "category": "PBT Fans"
    },
    {
        "id": "69096a46-0dcb-4231-bad1-cf695a5dd945",
        "url": "https://mechaland-be.herokuapp.com/api/v1/updates/69096a46-0dcb-4231-bad1-cf695a5dd945/",
        "title": "ePBT Be The One",
        "text": "This keyset is heavily inspired by the IDE theme One Dark Pro. It's a PBT set kind of discrete with a composition potential using the several kits available. Also note that there is NorDe, FR, and BE kit, Expected to be ready to ship in two weeks (2022-09-17), Production completion progress reaches 95% (2022-09-08)",
        "category": "PBT Fans"
    },
    {
        "id": "4acbd163-88f3-47e3-8d18-e69721356810",
        "url": "https://mechaland-be.herokuapp.com/api/v1/updates/4acbd163-88f3-47e3-8d18-e69721356810/",
        "title": "ePBT Samurai keycaps set",
        "text": "ePBT RamenStop is a set inspired by small Japanese ramen shops. This set features plenty of cute iconic ramen shop novelties to fulfill your hunger for cute novelties, Sample confirmed, queued for production. (2022-06-06), Yellow color not accepted, making the third sample (2022-04-06).",
        "category": "PBT Fans"
    }
  ]);

	const getData = async () => {
    try {
      const response = await axios.get("api/v1/updates/");
      const map = [];
      response.data.forEach((source) => {
        map.push(source.category);
      })
      console.log(map);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    try {
      const response1 = await axios.get("api/v1/updates/?category=PBT Fans");
      console.log("Update1: ", response1.data);
      await setUpdate1(response1.data);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    try {
      const response2 = await axios.get("api/v1/updates/?category=PBT Fans");
      console.log("Update2: ", response2.data);
      await setUpdate2(response2.data);
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
          {update1.length > 0 && update1.length > 0 ?
          <></>
          :
          <p>Welp theres no new update, So you guys are already up-to-date!</p>
          }
          {update1.length > 0 ?
          <>
            <h4 className={`${styles.updateTitle}`}>{update1[0].category}</h4>
            {update1.map((item, idx) => 
              <Accordion key={`update1-${idx}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={`${styles.left}`}>
                    {item.text}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )}
          </>
          :
          <></>
          }
          <br/>
          {update2.length > 0 ?
          <>
            <h4 className={`${styles.updateTitle}`}>{update2[0].category}</h4>
            {update2.map((item, idx) => 
              <Accordion key={`update2-${idx}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={`${styles.left}`}>
                    {item.text}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            )}
          </>
          :
          <></>
          }

          <p className={`${styles.black} ${styles.backButton}`} style={{marginTop: "50px"}} onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</p>
        </div>
      </main>
    </div>
  )
}
