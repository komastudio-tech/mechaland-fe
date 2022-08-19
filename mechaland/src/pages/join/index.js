import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import { Divider } from 'antd';
import styles from '../../../styles/Home.module.css';
import { SEO, Skeleton } from '../../components';
import { Row, Col } from "reactstrap";
import { useStoreApi } from '../../context/useAPI';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Join() {

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
			<a style={{marginBottom: "15px"}}>Click the green button which leads to our official Discord</a><br/>
			<a>or</a><br/>
			<Link href="https://discord.com/invite/Y5Bj6rK9He"><a target="_blank" rel="noopener noreferrer" className={`btn btn-lg active ${styles.discordButton}`} role="button" aria-pressed="true" style={{marginBottom: "50px"}}>
				<Row>
					<Col>
					<Image  width='45' height='45' src="/assets/discord_white.png" alt="Mechaland Discord" className={styles.discordImage}/>
					</Col>
					<Col>
					<div className={styles.discordJoin}>JOIN OUR</div><div className={styles.discordDC}>DISCORD</div>
					</Col>
				</Row>
			</a></Link>

			<h5 className={styles.joinStep}>STEP 2:</h5>
			<Image  width='320' height='350' src="/assets/join/join2.png" alt="Mechaland Join 2" className={styles.joinPict} style={{maxWidth: "25vw"}}/><br/>
			<a>Click Join button</a><br/><br/><br/>

			<h5 className={styles.joinStep}>STEP 3:</h5>
			<Image  width='1000' height='550' src="/assets/join/join3.png" alt="Mechaland Join 3" className={styles.joinPict} style={{maxWidth: "80vw"}}/><br/>
			<a>Click the Check mark icon and also Complete button to gain access to the server</a><br/><br/><br/>

			<h5 className={styles.joinStep}>STEP 4:</h5>
			<Image  width='450' height='450' src="/assets/join/join4.png" alt="Mechaland Join 4" className={styles.joinPict} /><br/>
			<a>Check the “I have read and agree to the rules” box, and click submit.</a><br/><br/><br/>

			<h5 className={styles.joinStep}>STEP 5:</h5>
			<Image  width='270' height='1000' src="/assets/join/join5.png" alt="Mechaland Join 5" className={styles.joinPict} /><br/>
			<a>Click Interest-Check</a><br/><br/><br/>

			<h5 className={styles.joinStep}>STEP 6:</h5>
			<Image  width='1000' height='550' src="/assets/join/join6.png" alt="Mechaland Join 6" className={styles.joinPict} style={{maxWidth: "80vw"}}/><br/>
			<a>Click Interest-Check and follow the instruction on joining or buying the product(s)</a>
        </div>
      </main>
    </div>
  )
}
