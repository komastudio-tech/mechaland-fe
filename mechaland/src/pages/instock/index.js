import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';
import { SEO, Skeleton } from '../../components';
import { Row, Col } from "reactstrap";
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect, useRef } from 'react';

export default function Home() {

  return (
    <div className={styles.container}>
      <SEO
        title="Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.description}>
          <div className={styles.desc}>
            <h3 className={styles.title}>In Stock</h3>
            <p className={styles.openSans}>
                These items are in stock and ready to ship!
            </p>
          </div>
        </div>
        <div className={styles.section}>
					<Row>
						<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
							</Row>
							</a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g</h5>
							</Row>
							</a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)</h5>
							</Row>
							</a>
            </Col>
						<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
							</Row>
							</a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g</h5>
							</Row>
							</a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)</h5>
							</Row>
							</a>
            </Col>
						<Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/jwick-t1-stem-switch-tactile-pcb-mount' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch1.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>JWICK T1 Stem Switch (Tactile - PCB Mount)</h5>
							</Row>
							</a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/jwick-black-switch-linear-pcb-mount-58-5g' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch2.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>JWICK Black Switch (Linear - PCB Mount) - 58.5g</h5>
							</Row>
							</a>
            </Col>
            <Col sm="12" md="4" style={{ margin: "3vw 0" }}>
							<a href='https://www.tokopedia.com/mechaland/gateron-yellow-linier-plate-mount' target="_blank" rel="noopener noreferrer">
							<Row className={styles.textCenter}>
									<img src="/assets/temp/switch3.jpeg" alt="Mechaland Featured" className={styles.featuredPict} />
							</Row>
							<Row className={styles.textCenter}>
									<h5 className={styles.featured}>Gateron Yellow (Linier - Plate Mount)</h5>
							</Row>
							</a>
            </Col>
					</Row>
        </div>
      </main>
    </div>
  )
}
