import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from "reactstrap";
import { Skeleton } from '../../components';
import { useState } from 'react';
import styles from '../../../styles/Home.module.css';
import AppPagination from "@/components/Pagination";

export default function Live() {
	const [load, setLoad] = useState(true);
	const [datas, setDatas] = useState([]);

	const rupiah = (price) => {
    let result =  new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(price);

    return result;
  };

  const renderItem = datas.map((item, idx) => (
    <Col key={`live-${idx}`} sm="12" md="4" style={{ margin: "3vw 0" }}>
      <Link href={`/details/?id=${item.id}&status=false`}>
        <a>
          <Row className={styles.textCenter}>
            <Image width="30" height="30" layout="responsive" src={item.list_photos.length > 0 ? item.list_photos[0].image : `/assets/temp/no_data.jpg`} alt={item.text} className={styles.featuredPict} />
          </Row>
          <Row className={styles.textCenter}>
            <h5 className={styles.featured}>{item.title}<br/><br/>{rupiah(item.price)}</h5>
          </Row>
        </a>
      </Link>
    </Col>
  ));

  return (
    <div className={styles.container}>
      <Head>
        <title>Live | Mechaland</title>
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
            <h1 className={styles.title}>LIVE</h1>
            <p className={styles.subTitle}>
				Do not purchase different pre-orders/GBs/in stock in one order, we cannot guarantee which stock will be out of stock while we are waiting for all products to arrive.
            </p>
			<p className={styles.subTitle}>
				If any of the products are out of stock, we will remove them from your order and refund you.
			</p>
          </div>
        </div>
        <div className={styles.sectionInstock} style={{marginTop: "2px !important"}}>
				{ load ?
            <Row>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
								<Row className={styles.textCenter}>
									<Skeleton height="300px" width="300px" />
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="200px" /></h5>
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="100px" /></h5>
								</Row>
							</Col>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
								<Row className={styles.textCenter}>
									<Skeleton height="300px" width="300px" />
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="200px" /></h5>
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="100px" /></h5>
								</Row>
							</Col>
              <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
								<Row className={styles.textCenter}>
									<Skeleton height="300px" width="300px" />
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="200px" /></h5>
								</Row>
								<Row className={styles.textCenter}>
									<h5 className={styles.featured}><Skeleton height="30px" width="100px" /></h5>
								</Row>
							</Col>
            </Row>
            :
            <Row>
            {datas.length > 0 ?
            renderItem
            :
            <p>Sorry, we are still checking our products</p>
            }
            </Row>
          }
          <AppPagination setDatas={(p) => setDatas(p)} status={true} category="Live" setLoad={(p) => setLoad(p)}/>
        </div>
      </main>
    </div>
  )
}
