import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import { Row, Col } from "reactstrap";
import { SEO, Skeleton } from '../../components';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/Home.module.css';
// import { useStoreApi } from '../../context/useAPI';

export default function Home() {

  return (
    <div className={styles.container}>
      <SEO
        title="Live | Mechaland"
        description="Mechaland"
      />

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
		<Row>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)<br/><br/>Rp4.000</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g<br/><br/>Rp4.500</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)<br/><br/>Rp3.000</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)<br/><br/>Rp4.000</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g<br/><br/>Rp4.500</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)<br/><br/>Rp3.000</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)<br/><br/>Rp4.000</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g<br/><br/>Rp4.500</h5>
					</Row>
				</a></Link>
            </Col>
			<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
				<Link href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount'><a target="_blank" rel="noopener noreferrer">
					<Row className={styles.textCenter}>
						<Image width='30' height='30' layout='responsive' src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
					</Row>
					<Row className={styles.textCenter}>
						<h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)<br/><br/>Rp3.000</h5>
					</Row>
				</a></Link>
            </Col>
		</Row>
        </div>
      </main>
    </div>
  )
}
