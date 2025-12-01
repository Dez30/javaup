import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          ☕ {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>Java 技术全栈知识库</p>
        <p className={styles.heroDescription}>
          系统化学习 Java 技术栈，助力技术提升与面试通关
        </p>
        <div className={styles.tagCloud}>
          <span className={styles.tag}>Java 基础</span>
          <span className={styles.tag}>集合框架</span>
          <span className={styles.tag}>并发编程</span>
          <span className={styles.tag}>JVM</span>
          <span className={styles.tag}>Spring</span>
          <span className={styles.tag}>SpringBoot</span>
          <span className={styles.tag}>MySQL</span>
          <span className={styles.tag}>Redis</span>
          <span className={styles.tag}>分布式</span>
          <span className={styles.tag}>微服务</span>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro">
            🚀 开始学习
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/intro"
            style={{marginLeft: '1rem'}}>
            📚 查看文档
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Java 技术全栈知识库 - ${siteConfig.title}`}
      description="JavaUp 是一个系统化的 Java 技术学习平台，涵盖 Java 基础、集合、并发、JVM、Spring、SpringBoot、MySQL、Redis、分布式、微服务、消息队列等全栈知识，助力技术提升与面试通关">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
