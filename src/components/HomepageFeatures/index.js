import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '📚 全面系统的知识体系',
    description: (
      <>
        涵盖 <strong>Java 基础、集合、并发、JVM</strong> 等核心知识，
        以及 <strong>Spring、SpringBoot、MySQL、Redis</strong> 等主流技术栈，
        还包括 <strong>分布式、微服务、Kafka、Dubbo、Zookeeper、RocketMQ、RabbitMQ</strong> 等框架中间件，
        从基础到进阶，构建完整的 Java 技术知识图谱。
      </>
    ),
  },
  {
    title: '🎯 面试必备的八股文',
    description: (
      <>
        精心整理各大互联网公司高频面试题，深入浅出地讲解每个知识点。
        不仅是面试题库，更是实战技能提升的指南。
        帮助你快速掌握面试要点，自信应对技术面试。
      </>
    ),
  },
  {
    title: '🔧 开发工具全掌握',
    description: (
      <>
        详细介绍 <strong>Maven、Git、Docker</strong> 等必备开发工具的使用方法和最佳实践。
        让你不仅会用，更能用好，提升开发效率，规范开发流程。
      </>
    ),
  },
  {
    title: '📊 数据库与缓存',
    description: (
      <>
        深入讲解 <strong>MySQL</strong> 的索引优化、事务管理、锁机制等核心知识，
        以及 <strong>Redis</strong> 的数据结构、持久化、集群方案等，
        让你掌握高性能应用的核心技能。
      </>
    ),
  },
  {
    title: '☁️ 分布式与微服务',
    description: (
      <>
        系统化学习分布式系统设计理论和微服务架构最佳实践。
        涵盖服务治理、配置中心、链路追踪、限流降级等关键技术，
        助你构建高可用、高性能的分布式系统。
      </>
    ),
  },
  {
    title: '🐛 问题排查与调优',
    description: (
      <>
        分享实际开发中常见的问题排查思路和性能调优方法。
        包括 <strong>JVM 调优、网络排查、系统监控</strong> 等实战技能，
        让你具备解决复杂问题的能力。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
