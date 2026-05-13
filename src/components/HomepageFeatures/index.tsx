import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Primeiro Acesso',
    Svg: require('@site/static/img/primeiro_acesso.svg').default,
    description: (
      <>
        Aprenda como criar sua conta e fazer o primeiro acesso ao SIGAMA.
      </>
    ),
  },
  {
    title: 'Gestão de Propriedades',
    Svg: require('@site/static/img/gestao_propriedades.svg').default,
    description: (
      <>
        Tutoriais sobre cadastro e gestão de propriedades rurais no sistema.
      </>
    ),
  },
  {
    title: 'Guias e Declarações',
    Svg: require('@site/static/img/guias_declaracoes.svg').default,
    description: (
      <>
        Emita guias, declarações e gerencie documentos agropecuários.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
