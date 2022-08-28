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
        title="Pre-Order | Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.titlePage}>
          <div className={styles.desc}>
            <h1 className={styles.title}>PREORDER</h1>
            <p className={styles.subTitle}>
				<b>What is a Pre-Order?</b><br/>We usually order some additional stock on top of the group buy quantity and sell them as GMK in stock. If you have missed the group buy and are afraid of missing the in-stock, pre-order is the best option for you. The pre-order price will be higher than the group buy and lower than the in-stock. The delivery time will be around the same time as the group buy orders.
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
