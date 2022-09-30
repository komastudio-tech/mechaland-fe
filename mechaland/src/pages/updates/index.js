import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';
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
  const [categories, setCategories] = useState([]);
	const [datas, setDatas] = useState([
    {
        "id": "528a8f03-90a4-4189-8682-a098552b5c81",
        "title": "ePBT Soju",
        "text": "The set was inspired by the Korean alcoholic drink, Soju. With a positive relationship with my love for soju and a negative tolerance level for alcohol, Expected to be ready to ship in two weeks (2022-09-17), Production completion progress reaches 70% (2022-09-08).",
        "category": "PBTFans"
    },
    {
        "id": "69096a46-0dcb-4231-bad1-cf695a5dd945",
        "title": "ePBT Be The One",
        "text": "This keyset is heavily inspired by the IDE theme One Dark Pro. It&apos;s a PBT set kind of discrete with a composition potential using the several kits available. Also note that there is NorDe, FR, and BE kit, Expected to be ready to ship in two weeks (2022-09-17), Production completion progress reaches 95% (2022-09-08)",
        "category": "PBTFans"
    },
    {
        "id": "4acbd163-88f3-47e3-8d18-e69721356810",
        "title": "ePBT Samurai keycaps set",
        "text": "ePBT RamenStop is a set inspired by small Japanese ramen shops. This set features plenty of cute iconic ramen shop novelties to fulfill your hunger for cute novelties, Sample confirmed, queued for production. (2022-06-06), Yellow color not accepted, making the third sample (2022-04-06).",
        "category": "PBTFans"
    },
    {
        "id": "4acbd163-88f3-47e3-8d18-e69721356811",
        "title": "R60 retro keyboard",
        "text": "The prototype Cherry G80-3077SAU is one of my favorite mechanical keyboards, and I love the great design. We recreated this 60% layout keyboard kit with reference to the shape of the G80-3077SAU.",
        "category": "Keyboard Kit"
    }
  ]);

	const getData = async () => {
    const map = [];
    try {
      const response = await axios.get("api/v1/updates/");
      datas.forEach((source) => {
        if(map.indexOf(source.category) < 0) {
          map.push(source.category);
        }
      });
      console.log("Categories: ", map);
      console.log("Datas: ", datas);
      await setCategories(map);
      await setDatas(response.data);
    } catch (err) {
      console.log("ERROR: ", err);
    }

    setLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderDetails = (cat) => datas.map((item, idx) => 
    (item.category === cat ?
      <Accordion key={`updates-${idx}`}>
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
      :
      <></>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Updates | Mechaland</title>
        <meta name="title" content="Details | Mechaland" />
        <meta
          name="description"
          content={`Mechaland`}
        />
        <meta name="author" content={`Mechaland 2022`} />
        <meta name="copyright" content={`Mechaland`} />
        <a rel="Syklik" href="/favicon.ico" />
        <a rel="canonical" href={`Mechaland`} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Details | Mechaland" />
        <meta
          property="og:site_name"
          content={`Mechaland`}
        />
        <meta property="og:url" content={`https://mechaland.id/`} />
        <meta
          property="og:description"
          content={`Mechaland`}
        />
        <meta property="og:type" content={`website`} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:url" content={`https://mechaland.id/`} />
        <meta name="twitter:title" content="Details | Mechaland" />
        <meta
          name="twitter:description"
          content={`Mechaland`}
        />

        <meta name="viewport" content="initial-scale = 1.0,maximum-scale = 1.0" />
        <a rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <main className={styles.main}>
        <div className={styles.titlePage}>
          <div className={styles.desc}>
            <h1 className={styles.title}>Updates</h1>
          </div>
            <Divider className={styles.updateDivider} />
        </div>
        <div className={styles.sectionInstock} style={{marginTop: "2px !important"}}>
          {datas.length <= 0 ?
          <p>Welp theres no new update, So you guys are already up-to-date!</p>
          :
          <>
            <h4 className={`${styles.updateTitle}`}>{categories[0]}</h4>
            {renderDetails(categories[0])}
            <br/>
            <h4 className={`${styles.updateTitle}`}>{categories[1]}</h4>
            {renderDetails(categories[1])}
          </>
          }
          <p className={`${styles.black} ${styles.backButton}`} style={{marginTop: "50px"}} onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</p>
        </div>
      </main>
    </div>
  )
}
