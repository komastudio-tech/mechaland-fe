import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from 'antd';
import { Row, Col } from "reactstrap";
import { useRouter } from 'next/router';
import { SEO, Skeleton } from '../../components';
import { useState, useEffect, useRef } from 'react';
import styles from '../../../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
// import { useStoreApi } from '../../context/useAPI';

export default function Join() {
	const router = useRouter();

  return (
    <div className={styles.container}>
      <SEO
        title="How To Join | Mechaland"
        description="Mechaland"
      />

      <main className={styles.main}>
        <div className={styles.description} style={{marginBottom: "10px", paddingBottom: "5px"}}>
          <div className={styles.desc}>
            <h1 className={styles.title}>How To Join</h1>
        	<Divider className={styles.dividerJoin} />
          </div>
        </div>
        <div className={styles.section}>
					<h5 className={styles.joinStep}>STEP 1:</h5>
					<Image  width='700' height='500' src="/assets/join/join1.png" alt="Mechaland Join 1" className={styles.joinPict}/><br/>
					<p className={styles.black} style={{marginBottom: "15px"}}>Click the green button which leads to our official Discord</p>
					<p className={styles.black}>or</p>
					<Link href="https://discord.com/invite/Y5Bj6rK9He"><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.discordButton}`} role="button" aria-pressed="true">
						<Row>
							<Col>
								<Image  width='45' height='45' src="/assets/discord_white.png" alt="Mechaland Discord" className={styles.discordImage}/>
							</Col>
							<Col>
								<div className={styles.discordJoin}>JOIN OUR</div><div className={styles.discordDC}>DISCORD</div>
							</Col>
						</Row>
					</a></Link>

					<h5 className={styles.joinStep} style={{marginTop: "50px"}}>STEP 2:</h5>
					<Image  width='320' height='350' src="/assets/join/join2.png" alt="Mechaland Join 2" className={styles.joinPict} style={{maxWidth: "25vw"}}/><br/>
					<p className={styles.black}>Click Join button</p><br/><br/><br/>

					<h5 className={styles.joinStep}>STEP 3:</h5>
					<Image  width='1160' height='280' src="/assets/join/join3.png" alt="Mechaland Join 3" className={styles.joinPict} style={{maxWidth: "80vw"}}/><br/>
					<p className={styles.black}>Click the Check mark icon and also Complete button to gain access to the server</p><br/><br/><br/>

					<h5 className={styles.joinStep}>STEP 4:</h5>
					<Image  width='450' height='450' src="/assets/join/join4.png" alt="Mechaland Join 4" className={styles.joinPict} /><br/>
					<p className={styles.black}>Check the “I have read and agree to the rules” box, and click submit.</p><br/><br/><br/>

					<h5 className={styles.joinStep}>STEP 5:</h5>
					<Image  width='250' height='1000' src="/assets/join/join5.png" alt="Mechaland Join 5" className={styles.joinPict} /><br/>
					<p className={styles.black}>Click Interest-Check</p><br/><br/><br/>

					<h5 className={styles.joinStep}>STEP 6:</h5>
					<Image  width='1000' height='550' src="/assets/join/join6.png" alt="Mechaland Join 6" className={styles.joinPict} style={{maxWidth: "80vw"}}/><br/>
					<p className={styles.black}>Click Interest-Check and follow the instruction on joining or buying the product(s)</p><br/><br/>

					<h5 className={styles.joinStep}>STEP 7:</h5>
					<p className={styles.black}>You may explore other threads to see any progress or plan on group buy, or maybe suggest the next group buy product</p><br/><br/>

					<p className={styles.black} style={{marginBottom: "0"}}>For any further question please ask the available admins on Discord</p><br/><br/>

					<p className={`${styles.black} ${styles.backButton}`} onClick={() => router.back()}><FontAwesomeIcon icon={faArrowLeftLong} /> Back</p>
        </div>
      </main>
    </div>
  )
}
