import { gaMeasurementId } from '@/configs/ga';

const GTagScript: React.FC = () => {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaMeasurementId}', { 'debug_mode': true });
              `,
        }}
      />
    </>
  );
};

export default GTagScript;
