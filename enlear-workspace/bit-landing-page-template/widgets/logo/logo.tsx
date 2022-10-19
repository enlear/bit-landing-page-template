import React, { ReactNode } from 'react';

export type LogoProps = {
  /**
   * an svg component to render the application logo.
   */
  logo?: React.ReactNode;
};

export function Logo({ logo }: LogoProps) {
  const svg = logo || (
    <svg
      data-testid="logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="100"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <g />
        <clipPath id="2a2acf67db">
          <path
            d="M 123.566406 158 L 190 158 L 190 233.105469 L 123.566406 233.105469 Z M 123.566406 158 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="7366399e77">
          <path
            d="M 170.929688 212.292969 L 127.152344 232.921875 C 127.152344 232.921875 121.578125 234.328125 124.644531 229.460938 C 127.707031 224.597656 171.746094 158.714844 171.746094 158.714844 L 189.027344 196.125 Z M 170.929688 212.292969 "
            clip-rule="nonzero"
          />
        </clipPath>
        <linearGradient
          x1="-305.773186"
          gradientTransform="matrix(0.490666, 1.043341, -1.042246, 0.491181, 2890.759935, -749.596722)"
          y1="2452.676667"
          x2="-225.044868"
          gradientUnits="userSpaceOnUse"
          y2="2533.405277"
          id="d3b3f36ac2"
        >
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0.125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0.1875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.601807%, 28.215027%, 61.209106%)"
            offset="0.195312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.668945%, 28.521729%, 61.416626%)"
            offset="0.199219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.733032%, 28.814697%, 61.61499%)"
            offset="0.203125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.795593%, 29.10614%, 61.811829%)"
            offset="0.207031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.85968%, 29.397583%, 62.008667%)"
            offset="0.210938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.922241%, 29.689026%, 62.205505%)"
            offset="0.214844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.986328%, 29.980469%, 62.402344%)"
            offset="0.21875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.050415%, 30.271912%, 62.599182%)"
            offset="0.222656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.114502%, 30.56488%, 62.797546%)"
            offset="0.226562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.177063%, 30.856323%, 62.994385%)"
            offset="0.230469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.24115%, 31.147766%, 63.191223%)"
            offset="0.234375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.303711%, 31.439209%, 63.388062%)"
            offset="0.238281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.367798%, 31.730652%, 63.5849%)"
            offset="0.242188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.430359%, 32.022095%, 63.781738%)"
            offset="0.246094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.494446%, 32.315063%, 63.978577%)"
            offset="0.25"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.558533%, 32.606506%, 64.175415%)"
            offset="0.253906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.62262%, 32.897949%, 64.373779%)"
            offset="0.257812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.685181%, 33.189392%, 64.570618%)"
            offset="0.261719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.749268%, 33.480835%, 64.767456%)"
            offset="0.265625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.811829%, 33.772278%, 64.964294%)"
            offset="0.269531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.875916%, 34.065247%, 65.161133%)"
            offset="0.273438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.938477%, 34.356689%, 65.357971%)"
            offset="0.277344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.002563%, 34.648132%, 65.556335%)"
            offset="0.28125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.065125%, 34.939575%, 65.753174%)"
            offset="0.285156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.129211%, 35.231018%, 65.950012%)"
            offset="0.289062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.193298%, 35.522461%, 66.146851%)"
            offset="0.292969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.257385%, 35.813904%, 66.343689%)"
            offset="0.296875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.319946%, 36.105347%, 66.540527%)"
            offset="0.300781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.384033%, 36.398315%, 66.737366%)"
            offset="0.304688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.446594%, 36.689758%, 66.934204%)"
            offset="0.308594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.510681%, 36.981201%, 67.132568%)"
            offset="0.3125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.573242%, 37.272644%, 67.329407%)"
            offset="0.316406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.637329%, 37.564087%, 67.526245%)"
            offset="0.320312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.69989%, 37.85553%, 67.723083%)"
            offset="0.324219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.763977%, 38.148499%, 67.919922%)"
            offset="0.328125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.828064%, 38.439941%, 68.11676%)"
            offset="0.332031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.892151%, 38.731384%, 68.315125%)"
            offset="0.335938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.954712%, 39.022827%, 68.511963%)"
            offset="0.339844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.018799%, 39.31427%, 68.708801%)"
            offset="0.34375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.08136%, 39.605713%, 68.90564%)"
            offset="0.347656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.145447%, 39.898682%, 69.102478%)"
            offset="0.351562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.208008%, 40.190125%, 69.299316%)"
            offset="0.355469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.272095%, 40.481567%, 69.496155%)"
            offset="0.359375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.336182%, 40.77301%, 69.692993%)"
            offset="0.363281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.400269%, 41.064453%, 69.891357%)"
            offset="0.367188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.46283%, 41.355896%, 70.088196%)"
            offset="0.371094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.526917%, 41.648865%, 70.285034%)"
            offset="0.375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.589478%, 41.940308%, 70.481873%)"
            offset="0.378906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.653564%, 42.23175%, 70.678711%)"
            offset="0.382812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.716125%, 42.523193%, 70.875549%)"
            offset="0.386719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.780212%, 42.814636%, 71.073914%)"
            offset="0.390625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.842773%, 43.106079%, 71.270752%)"
            offset="0.394531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.90686%, 43.399048%, 71.46759%)"
            offset="0.398437"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.970947%, 43.690491%, 71.664429%)"
            offset="0.402344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.035034%, 43.981934%, 71.861267%)"
            offset="0.40625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.097595%, 44.273376%, 72.058105%)"
            offset="0.410156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.161682%, 44.564819%, 72.254944%)"
            offset="0.414062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.224243%, 44.856262%, 72.451782%)"
            offset="0.417969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.28833%, 45.149231%, 72.650146%)"
            offset="0.421875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.350891%, 45.440674%, 72.846985%)"
            offset="0.425781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.414978%, 45.732117%, 73.043823%)"
            offset="0.429687"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.477539%, 46.02356%, 73.240662%)"
            offset="0.433594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.541626%, 46.315002%, 73.4375%)"
            offset="0.4375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.605713%, 46.606445%, 73.634338%)"
            offset="0.441406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.6698%, 46.899414%, 73.831177%)"
            offset="0.445312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.732361%, 47.190857%, 74.028015%)"
            offset="0.449219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.796448%, 47.4823%, 74.226379%)"
            offset="0.453125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.859009%, 47.773743%, 74.423218%)"
            offset="0.457031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.923096%, 48.065186%, 74.620056%)"
            offset="0.460937"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.985657%, 48.356628%, 74.816895%)"
            offset="0.464844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.049744%, 48.648071%, 75.013733%)"
            offset="0.46875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.113831%, 48.939514%, 75.210571%)"
            offset="0.472656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.177917%, 49.232483%, 75.408936%)"
            offset="0.476563"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.240479%, 49.523926%, 75.605774%)"
            offset="0.480469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.304565%, 49.815369%, 75.802612%)"
            offset="0.484375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.367126%, 50.106812%, 75.999451%)"
            offset="0.488281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.431213%, 50.398254%, 76.196289%)"
            offset="0.492187"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.493774%, 50.689697%, 76.393127%)"
            offset="0.496094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.557861%, 50.982666%, 76.589966%)"
            offset="0.5"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.620422%, 51.274109%, 76.786804%)"
            offset="0.503906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.684509%, 51.565552%, 76.985168%)"
            offset="0.507812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.748596%, 51.856995%, 77.182007%)"
            offset="0.511719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.812683%, 52.148438%, 77.378845%)"
            offset="0.515625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.875244%, 52.43988%, 77.575684%)"
            offset="0.519531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.939331%, 52.732849%, 77.772522%)"
            offset="0.523438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.001892%, 53.024292%, 77.96936%)"
            offset="0.527344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.065979%, 53.315735%, 78.167725%)"
            offset="0.53125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.12854%, 53.607178%, 78.364563%)"
            offset="0.535156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.192627%, 53.898621%, 78.561401%)"
            offset="0.539062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.256714%, 54.190063%, 78.75824%)"
            offset="0.542969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.320801%, 54.483032%, 78.955078%)"
            offset="0.546875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.383362%, 54.774475%, 79.151917%)"
            offset="0.550781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.447449%, 55.065918%, 79.348755%)"
            offset="0.554688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.51001%, 55.357361%, 79.545593%)"
            offset="0.558594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.574097%, 55.648804%, 79.743958%)"
            offset="0.5625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.636658%, 55.940247%, 79.940796%)"
            offset="0.566406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.700745%, 56.233215%, 80.137634%)"
            offset="0.570313"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.763306%, 56.524658%, 80.334473%)"
            offset="0.574219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.827393%, 56.816101%, 80.531311%)"
            offset="0.578125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.891479%, 57.107544%, 80.728149%)"
            offset="0.582031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.955566%, 57.398987%, 80.926514%)"
            offset="0.585938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.018127%, 57.69043%, 81.123352%)"
            offset="0.589844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.082214%, 57.983398%, 81.32019%)"
            offset="0.59375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.144775%, 58.274841%, 81.517029%)"
            offset="0.597656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.208862%, 58.566284%, 81.713867%)"
            offset="0.601563"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.271423%, 58.857727%, 81.910706%)"
            offset="0.605469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.33551%, 59.14917%, 82.107544%)"
            offset="0.609375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.398071%, 59.440613%, 82.304382%)"
            offset="0.613281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.462158%, 59.733582%, 82.502747%)"
            offset="0.617188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.526245%, 60.025024%, 82.699585%)"
            offset="0.621094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.590332%, 60.316467%, 82.896423%)"
            offset="0.625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.652893%, 60.60791%, 83.093262%)"
            offset="0.628906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.71698%, 60.899353%, 83.2901%)"
            offset="0.632813"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.779541%, 61.190796%, 83.486938%)"
            offset="0.636719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.843628%, 61.483765%, 83.685303%)"
            offset="0.640625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.906189%, 61.775208%, 83.882141%)"
            offset="0.644531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.970276%, 62.06665%, 84.078979%)"
            offset="0.648438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.034363%, 62.358093%, 84.275818%)"
            offset="0.652344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.09845%, 62.649536%, 84.472656%)"
            offset="0.65625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.161011%, 62.940979%, 84.669495%)"
            offset="0.660156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.225098%, 63.232422%, 84.866333%)"
            offset="0.664063"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.287659%, 63.523865%, 85.063171%)"
            offset="0.667969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.351746%, 63.816833%, 85.261536%)"
            offset="0.671875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.414307%, 64.108276%, 85.458374%)"
            offset="0.675781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.478394%, 64.399719%, 85.655212%)"
            offset="0.679688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.540955%, 64.691162%, 85.852051%)"
            offset="0.683594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.605042%, 64.982605%, 86.048889%)"
            offset="0.6875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.669128%, 65.274048%, 86.245728%)"
            offset="0.691406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.733215%, 65.567017%, 86.444092%)"
            offset="0.695313"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.795776%, 65.858459%, 86.64093%)"
            offset="0.699219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.859863%, 66.149902%, 86.837769%)"
            offset="0.703125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.922424%, 66.441345%, 87.034607%)"
            offset="0.707031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.986511%, 66.732788%, 87.231445%)"
            offset="0.710938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.049072%, 67.024231%, 87.428284%)"
            offset="0.714844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.113159%, 67.3172%, 87.625122%)"
            offset="0.71875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.17572%, 67.608643%, 87.82196%)"
            offset="0.722656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.239807%, 67.900085%, 88.020325%)"
            offset="0.726563"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.303894%, 68.191528%, 88.217163%)"
            offset="0.730469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.367981%, 68.482971%, 88.414001%)"
            offset="0.734375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.430542%, 68.774414%, 88.61084%)"
            offset="0.738281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.494629%, 69.067383%, 88.807678%)"
            offset="0.742188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.55719%, 69.358826%, 89.004517%)"
            offset="0.746094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.621277%, 69.650269%, 89.201355%)"
            offset="0.75"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.683838%, 69.941711%, 89.398193%)"
            offset="0.753906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.747925%, 70.233154%, 89.596558%)"
            offset="0.757812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.812012%, 70.524597%, 89.793396%)"
            offset="0.761719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.876099%, 70.817566%, 89.990234%)"
            offset="0.765625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.93866%, 71.109009%, 90.187073%)"
            offset="0.769531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.002747%, 71.400452%, 90.383911%)"
            offset="0.773438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.065308%, 71.691895%, 90.58075%)"
            offset="0.777344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.129395%, 71.983337%, 90.779114%)"
            offset="0.78125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.191956%, 72.27478%, 90.975952%)"
            offset="0.785156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.256042%, 72.567749%, 91.172791%)"
            offset="0.789062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.318604%, 72.859192%, 91.369629%)"
            offset="0.792969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.38269%, 73.150635%, 91.566467%)"
            offset="0.796875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.446777%, 73.442078%, 91.763306%)"
            offset="0.800781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.510864%, 73.733521%, 91.960144%)"
            offset="0.804687"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.573425%, 74.024963%, 92.156982%)"
            offset="0.808594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.637512%, 74.317932%, 92.355347%)"
            offset="0.8125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.700073%, 74.609375%, 92.552185%)"
            offset="0.816406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.76416%, 74.900818%, 92.749023%)"
            offset="0.820312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.826721%, 75.192261%, 92.945862%)"
            offset="0.824219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.890808%, 75.483704%, 93.1427%)"
            offset="0.828125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.953369%, 75.775146%, 93.339539%)"
            offset="0.832031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.017456%, 76.068115%, 93.537903%)"
            offset="0.835937"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.081543%, 76.359558%, 93.734741%)"
            offset="0.839844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.14563%, 76.651001%, 93.93158%)"
            offset="0.84375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.17157%, 76.774597%, 94.015503%)"
            offset="0.875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.199036%, 76.899719%, 94.099426%)"
            offset="1"
          />
        </linearGradient>
        <clipPath id="9303bedc95">
          <path
            d="M 161 162 L 189 162 L 189 216 L 161 216 Z M 161 162 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="7525152bcd">
          <path
            d="M 170.617188 162.484375 L 161.484375 175.527344 C 161.484375 175.527344 181.988281 193.609375 164.871094 215.222656 L 188.09375 204.277344 C 188.09375 204.277344 186.238281 163.210938 170.617188 162.484375 Z M 170.617188 162.484375 "
            clip-rule="nonzero"
          />
        </clipPath>
        <linearGradient
          x1="-272.59369"
          gradientTransform="matrix(0.490666, 1.043341, -1.042246, 0.491181, 2890.759935, -749.596722)"
          y1="2456.845009"
          x2="-266.61718"
          gradientUnits="userSpaceOnUse"
          y2="2503.071481"
          id="29b240f587"
        >
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0.140881"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0.25"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0.375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0.4375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.0518799%, 27.539062%, 56.156921%)"
            offset="0.46875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.19989%, 27.650452%, 56.32019%)"
            offset="0.476563"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.389099%, 27.793884%, 56.526184%)"
            offset="0.484375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.578308%, 27.935791%, 56.733704%)"
            offset="0.492188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.765991%, 28.079224%, 56.941223%)"
            offset="0.5"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.9552%, 28.22113%, 57.148743%)"
            offset="0.507813"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.144409%, 28.364563%, 57.356262%)"
            offset="0.515625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.332092%, 28.50647%, 57.562256%)"
            offset="0.523438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.521301%, 28.649902%, 57.769775%)"
            offset="0.53125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.71051%, 28.791809%, 57.977295%)"
            offset="0.539063"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.898193%, 28.935242%, 58.184814%)"
            offset="0.546875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.087402%, 29.078674%, 58.390808%)"
            offset="0.554688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.276611%, 29.220581%, 58.598328%)"
            offset="0.5625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.464294%, 29.364014%, 58.805847%)"
            offset="0.570313"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.653503%, 29.50592%, 59.013367%)"
            offset="0.578125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.842712%, 29.649353%, 59.21936%)"
            offset="0.585938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.031921%, 29.79126%, 59.42688%)"
            offset="0.59375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.219604%, 29.934692%, 59.634399%)"
            offset="0.601562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.408813%, 30.076599%, 59.841919%)"
            offset="0.609375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.598022%, 30.220032%, 60.047913%)"
            offset="0.617188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.785706%, 30.361938%, 60.255432%)"
            offset="0.625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.974915%, 30.505371%, 60.462952%)"
            offset="0.632813"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.164124%, 30.647278%, 60.670471%)"
            offset="0.640625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.351807%, 30.79071%, 60.876465%)"
            offset="0.648438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.541016%, 30.932617%, 61.083984%)"
            offset="0.65625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.730225%, 31.07605%, 61.291504%)"
            offset="0.664063"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.917908%, 31.217957%, 61.499023%)"
            offset="0.671875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.107117%, 31.361389%, 61.705017%)"
            offset="0.679688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.296326%, 31.503296%, 61.912537%)"
            offset="0.6875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.484009%, 31.646729%, 62.120056%)"
            offset="0.695312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.673218%, 31.788635%, 62.327576%)"
            offset="0.703125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.862427%, 31.932068%, 62.533569%)"
            offset="0.710938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.051636%, 32.073975%, 62.741089%)"
            offset="0.71875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.239319%, 32.217407%, 62.948608%)"
            offset="0.726562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.428528%, 32.36084%, 63.156128%)"
            offset="0.734375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.617737%, 32.502747%, 63.362122%)"
            offset="0.742188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.80542%, 32.646179%, 63.569641%)"
            offset="0.75"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.994629%, 32.788086%, 63.777161%)"
            offset="0.757813"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.183838%, 32.931519%, 63.98468%)"
            offset="0.765625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.371521%, 33.073425%, 64.1922%)"
            offset="0.773438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.56073%, 33.216858%, 64.398193%)"
            offset="0.78125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.749939%, 33.358765%, 64.605713%)"
            offset="0.789063"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.937622%, 33.502197%, 64.813232%)"
            offset="0.796875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.114624%, 33.636475%, 65.007019%)"
            offset="0.8125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.198547%, 33.699036%, 65.098572%)"
            offset="0.859119"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.198547%, 33.699036%, 65.098572%)"
            offset="0.875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.198547%, 33.699036%, 65.098572%)"
            offset="1"
          />
        </linearGradient>
        <clipPath id="558c211e41">
          <path
            d="M 190 53.855469 L 255.566406 53.855469 L 255.566406 129 L 190 129 Z M 190 53.855469 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="c4eaade7c2">
          <path
            d="M 208.230469 74.671875 L 252.003906 54.042969 C 252.003906 54.042969 257.578125 52.632812 254.515625 57.5 C 251.453125 62.367188 207.378906 128.25 207.378906 128.25 L 190.097656 90.839844 Z M 208.230469 74.671875 "
            clip-rule="nonzero"
          />
        </clipPath>
        <linearGradient
          x1="-324.16"
          gradientTransform="matrix(0.490666, 1.043341, -1.042246, 0.491181, 2890.759935, -749.596722)"
          y1="2445.333723"
          x2="-324.16"
          gradientUnits="userSpaceOnUse"
          y2="2366.436476"
          id="fd06bb0d2a"
        >
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0.125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0.15625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.598755%, 28.199768%, 61.199951%)"
            offset="0.171875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.644531%, 28.407288%, 61.338806%)"
            offset="0.175781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.690308%, 28.614807%, 61.479187%)"
            offset="0.179688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.740662%, 28.845215%, 61.634827%)"
            offset="0.183594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.791016%, 29.077148%, 61.791992%)"
            offset="0.1875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.84137%, 29.309082%, 61.947632%)"
            offset="0.191406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.891724%, 29.541016%, 62.104797%)"
            offset="0.195312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.942078%, 29.771423%, 62.260437%)"
            offset="0.199219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.992432%, 30.003357%, 62.417603%)"
            offset="0.203125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.042786%, 30.235291%, 62.573242%)"
            offset="0.207031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.09314%, 30.467224%, 62.730408%)"
            offset="0.210937"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.143494%, 30.697632%, 62.886047%)"
            offset="0.214844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.193848%, 30.929565%, 63.043213%)"
            offset="0.21875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.244202%, 31.159973%, 63.198853%)"
            offset="0.222656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.294556%, 31.391907%, 63.356018%)"
            offset="0.226562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.34491%, 31.62384%, 63.511658%)"
            offset="0.230469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.395264%, 31.855774%, 63.668823%)"
            offset="0.234375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.445618%, 32.086182%, 63.824463%)"
            offset="0.238281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.495972%, 32.318115%, 63.981628%)"
            offset="0.242188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.546326%, 32.550049%, 64.137268%)"
            offset="0.246094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.59668%, 32.781982%, 64.294434%)"
            offset="0.25"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.647034%, 33.01239%, 64.450073%)"
            offset="0.253906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.697388%, 33.244324%, 64.607239%)"
            offset="0.257812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.747742%, 33.474731%, 64.762878%)"
            offset="0.261719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.798096%, 33.706665%, 64.920044%)"
            offset="0.265625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.84845%, 33.938599%, 65.075684%)"
            offset="0.269531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.898804%, 34.170532%, 65.232849%)"
            offset="0.273438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.949158%, 34.40094%, 65.388489%)"
            offset="0.277344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.999512%, 34.632874%, 65.545654%)"
            offset="0.28125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.049866%, 34.864807%, 65.701294%)"
            offset="0.285156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.10022%, 35.096741%, 65.858459%)"
            offset="0.289062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.150574%, 35.327148%, 66.014099%)"
            offset="0.292969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.200928%, 35.559082%, 66.171265%)"
            offset="0.296875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.251282%, 35.78949%, 66.326904%)"
            offset="0.300781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.301636%, 36.021423%, 66.48407%)"
            offset="0.304688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.35199%, 36.253357%, 66.639709%)"
            offset="0.308594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.402344%, 36.485291%, 66.796875%)"
            offset="0.3125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.452698%, 36.715698%, 66.952515%)"
            offset="0.316406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.503052%, 36.947632%, 67.10968%)"
            offset="0.320312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.553406%, 37.179565%, 67.26532%)"
            offset="0.324219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.60376%, 37.411499%, 67.422485%)"
            offset="0.328125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.654114%, 37.641907%, 67.578125%)"
            offset="0.332031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.704468%, 37.87384%, 67.735291%)"
            offset="0.335938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.754822%, 38.104248%, 67.89093%)"
            offset="0.339844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.805176%, 38.336182%, 68.048096%)"
            offset="0.34375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.85553%, 38.568115%, 68.203735%)"
            offset="0.347656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.905884%, 38.800049%, 68.360901%)"
            offset="0.351563"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.956238%, 39.030457%, 68.516541%)"
            offset="0.355469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.006592%, 39.26239%, 68.673706%)"
            offset="0.359375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.056946%, 39.494324%, 68.829346%)"
            offset="0.363281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.1073%, 39.726257%, 68.986511%)"
            offset="0.367188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.157654%, 39.956665%, 69.142151%)"
            offset="0.371094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.209534%, 40.188599%, 69.299316%)"
            offset="0.375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.259888%, 40.419006%, 69.454956%)"
            offset="0.378906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.310242%, 40.65094%, 69.612122%)"
            offset="0.382812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.360596%, 40.882874%, 69.767761%)"
            offset="0.386719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.41095%, 41.114807%, 69.924927%)"
            offset="0.390625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.461304%, 41.345215%, 70.080566%)"
            offset="0.394531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.511658%, 41.577148%, 70.237732%)"
            offset="0.398438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.562012%, 41.809082%, 70.393372%)"
            offset="0.402344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.612366%, 42.041016%, 70.550537%)"
            offset="0.40625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.66272%, 42.271423%, 70.706177%)"
            offset="0.410156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.713074%, 42.503357%, 70.861816%)"
            offset="0.414062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.763428%, 42.733765%, 71.017456%)"
            offset="0.417969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.813782%, 42.965698%, 71.174622%)"
            offset="0.421875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.864136%, 43.197632%, 71.330261%)"
            offset="0.425781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.91449%, 43.429565%, 71.487427%)"
            offset="0.429688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.964844%, 43.659973%, 71.643066%)"
            offset="0.433594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.015198%, 43.891907%, 71.800232%)"
            offset="0.4375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.065552%, 44.12384%, 71.955872%)"
            offset="0.441406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.115906%, 44.355774%, 72.113037%)"
            offset="0.445312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.16626%, 44.586182%, 72.268677%)"
            offset="0.449219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.216614%, 44.818115%, 72.425842%)"
            offset="0.453125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.266968%, 45.048523%, 72.581482%)"
            offset="0.457031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.317322%, 45.280457%, 72.738647%)"
            offset="0.460938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.367676%, 45.51239%, 72.894287%)"
            offset="0.464844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.41803%, 45.744324%, 73.051453%)"
            offset="0.46875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.468384%, 45.974731%, 73.207092%)"
            offset="0.472656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.518738%, 46.206665%, 73.364258%)"
            offset="0.476562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.569092%, 46.438599%, 73.519897%)"
            offset="0.480469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.619446%, 46.670532%, 73.677063%)"
            offset="0.484375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.6698%, 46.90094%, 73.832703%)"
            offset="0.488281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.720154%, 47.132874%, 73.989868%)"
            offset="0.492188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.770508%, 47.363281%, 74.145508%)"
            offset="0.496094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.820862%, 47.595215%, 74.302673%)"
            offset="0.5"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.871216%, 47.827148%, 74.458313%)"
            offset="0.503906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.92157%, 48.059082%, 74.615479%)"
            offset="0.507812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.971924%, 48.28949%, 74.771118%)"
            offset="0.511719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.022278%, 48.521423%, 74.928284%)"
            offset="0.515625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.072632%, 48.753357%, 75.083923%)"
            offset="0.519531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.122986%, 48.985291%, 75.241089%)"
            offset="0.523438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.17334%, 49.215698%, 75.396729%)"
            offset="0.527344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.223694%, 49.447632%, 75.553894%)"
            offset="0.53125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.274048%, 49.67804%, 75.709534%)"
            offset="0.535156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.324402%, 49.909973%, 75.866699%)"
            offset="0.539062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.374756%, 50.141907%, 76.022339%)"
            offset="0.542969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.42511%, 50.37384%, 76.179504%)"
            offset="0.546875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.475464%, 50.604248%, 76.335144%)"
            offset="0.550781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.525818%, 50.836182%, 76.49231%)"
            offset="0.554688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.576172%, 51.068115%, 76.647949%)"
            offset="0.558594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.626526%, 51.300049%, 76.805115%)"
            offset="0.5625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.67688%, 51.530457%, 76.960754%)"
            offset="0.566406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.727234%, 51.76239%, 77.11792%)"
            offset="0.570312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.777588%, 51.992798%, 77.27356%)"
            offset="0.574219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.829468%, 52.224731%, 77.430725%)"
            offset="0.578125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.879822%, 52.456665%, 77.586365%)"
            offset="0.582031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.930176%, 52.688599%, 77.74353%)"
            offset="0.585938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.98053%, 52.919006%, 77.89917%)"
            offset="0.589844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.030884%, 53.15094%, 78.056335%)"
            offset="0.59375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.081238%, 53.382874%, 78.211975%)"
            offset="0.597656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.131592%, 53.614807%, 78.369141%)"
            offset="0.601562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.181946%, 53.845215%, 78.52478%)"
            offset="0.605469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.2323%, 54.077148%, 78.681946%)"
            offset="0.609375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.282654%, 54.307556%, 78.837585%)"
            offset="0.613281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.333008%, 54.53949%, 78.994751%)"
            offset="0.617187"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.383362%, 54.771423%, 79.150391%)"
            offset="0.621094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.433716%, 55.003357%, 79.307556%)"
            offset="0.625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.48407%, 55.233765%, 79.463196%)"
            offset="0.628906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.534424%, 55.465698%, 79.620361%)"
            offset="0.632812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.584778%, 55.697632%, 79.776001%)"
            offset="0.636719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.635132%, 55.929565%, 79.933167%)"
            offset="0.640625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.685486%, 56.159973%, 80.088806%)"
            offset="0.644531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.73584%, 56.391907%, 80.245972%)"
            offset="0.648438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.786194%, 56.622314%, 80.401611%)"
            offset="0.652344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.836548%, 56.854248%, 80.557251%)"
            offset="0.65625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.886902%, 57.086182%, 80.712891%)"
            offset="0.660156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.937256%, 57.318115%, 80.870056%)"
            offset="0.664062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.98761%, 57.548523%, 81.025696%)"
            offset="0.667969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.037964%, 57.780457%, 81.182861%)"
            offset="0.671875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.088318%, 58.01239%, 81.338501%)"
            offset="0.675781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.138672%, 58.244324%, 81.495667%)"
            offset="0.679687"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.189026%, 58.474731%, 81.651306%)"
            offset="0.683594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.23938%, 58.706665%, 81.808472%)"
            offset="0.6875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.289734%, 58.937073%, 81.964111%)"
            offset="0.691406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.340088%, 59.169006%, 82.121277%)"
            offset="0.695312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.390442%, 59.40094%, 82.276917%)"
            offset="0.699219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.440796%, 59.632874%, 82.434082%)"
            offset="0.703125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.49115%, 59.863281%, 82.589722%)"
            offset="0.707031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.541504%, 60.095215%, 82.746887%)"
            offset="0.710937"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.591858%, 60.327148%, 82.902527%)"
            offset="0.714844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.642212%, 60.559082%, 83.059692%)"
            offset="0.71875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.692566%, 60.78949%, 83.215332%)"
            offset="0.722656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.74292%, 61.021423%, 83.372498%)"
            offset="0.726562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.793274%, 61.251831%, 83.528137%)"
            offset="0.730469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.843628%, 61.483765%, 83.685303%)"
            offset="0.734375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.893982%, 61.715698%, 83.840942%)"
            offset="0.738281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.944336%, 61.947632%, 83.998108%)"
            offset="0.742187"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.99469%, 62.17804%, 84.153748%)"
            offset="0.746094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.045044%, 62.409973%, 84.310913%)"
            offset="0.75"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.095398%, 62.641907%, 84.466553%)"
            offset="0.753906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.145752%, 62.87384%, 84.623718%)"
            offset="0.757812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.196106%, 63.104248%, 84.779358%)"
            offset="0.761719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.24646%, 63.336182%, 84.936523%)"
            offset="0.765625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.296814%, 63.566589%, 85.092163%)"
            offset="0.769531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.347168%, 63.798523%, 85.249329%)"
            offset="0.773438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.397522%, 64.030457%, 85.404968%)"
            offset="0.777344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.449402%, 64.26239%, 85.562134%)"
            offset="0.78125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.499756%, 64.492798%, 85.717773%)"
            offset="0.785156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.55011%, 64.724731%, 85.874939%)"
            offset="0.789062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.600464%, 64.956665%, 86.030579%)"
            offset="0.792969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.650818%, 65.188599%, 86.187744%)"
            offset="0.796875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.701172%, 65.419006%, 86.343384%)"
            offset="0.800781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.751526%, 65.65094%, 86.500549%)"
            offset="0.804688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.80188%, 65.881348%, 86.656189%)"
            offset="0.808594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.852234%, 66.113281%, 86.813354%)"
            offset="0.8125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.902588%, 66.345215%, 86.968994%)"
            offset="0.816406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.952942%, 66.577148%, 87.12616%)"
            offset="0.820312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.003296%, 66.807556%, 87.281799%)"
            offset="0.824219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.05365%, 67.03949%, 87.438965%)"
            offset="0.828125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.104004%, 67.271423%, 87.594604%)"
            offset="0.832031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.154358%, 67.503357%, 87.75177%)"
            offset="0.835938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.204712%, 67.733765%, 87.90741%)"
            offset="0.839844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.255066%, 67.965698%, 88.064575%)"
            offset="0.84375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.30542%, 68.196106%, 88.220215%)"
            offset="0.847656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.355774%, 68.42804%, 88.37738%)"
            offset="0.851562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.406128%, 68.659973%, 88.53302%)"
            offset="0.855469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.456482%, 68.891907%, 88.690186%)"
            offset="0.859375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.506836%, 69.122314%, 88.845825%)"
            offset="0.863281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.55719%, 69.354248%, 89.002991%)"
            offset="0.867188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.607544%, 69.586182%, 89.15863%)"
            offset="0.871094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.657898%, 69.818115%, 89.315796%)"
            offset="0.875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.708252%, 70.048523%, 89.471436%)"
            offset="0.878906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.758606%, 70.280457%, 89.628601%)"
            offset="0.882812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.80896%, 70.510864%, 89.784241%)"
            offset="0.886719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.859314%, 70.742798%, 89.941406%)"
            offset="0.890625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.909668%, 70.974731%, 90.097046%)"
            offset="0.894531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.960022%, 71.206665%, 90.252686%)"
            offset="0.898438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.010376%, 71.437073%, 90.408325%)"
            offset="0.902344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.06073%, 71.669006%, 90.565491%)"
            offset="0.90625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.111084%, 71.90094%, 90.72113%)"
            offset="0.910156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.161438%, 72.132874%, 90.878296%)"
            offset="0.914062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.211792%, 72.363281%, 91.033936%)"
            offset="0.917969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.262146%, 72.595215%, 91.191101%)"
            offset="0.921875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.3125%, 72.827148%, 91.346741%)"
            offset="0.925781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.362854%, 73.059082%, 91.503906%)"
            offset="0.929688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.413208%, 73.28949%, 91.659546%)"
            offset="0.933594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.463562%, 73.521423%, 91.816711%)"
            offset="0.9375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.513916%, 73.751831%, 91.972351%)"
            offset="0.941406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.56427%, 73.983765%, 92.129517%)"
            offset="0.945312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.614624%, 74.215698%, 92.285156%)"
            offset="0.949219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.664978%, 74.447632%, 92.442322%)"
            offset="0.953125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.715332%, 74.67804%, 92.597961%)"
            offset="0.957031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.765686%, 74.909973%, 92.755127%)"
            offset="0.960937"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.81604%, 75.141907%, 92.910767%)"
            offset="0.964844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.866394%, 75.37384%, 93.067932%)"
            offset="0.96875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.916748%, 75.604248%, 93.223572%)"
            offset="0.972656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.967102%, 75.836182%, 93.380737%)"
            offset="0.976562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.017456%, 76.066589%, 93.536377%)"
            offset="0.980469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.069336%, 76.298523%, 93.693542%)"
            offset="0.984375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.11969%, 76.530457%, 93.849182%)"
            offset="0.988281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.170044%, 76.76239%, 94.006348%)"
            offset="0.992187"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.183777%, 76.831055%, 94.052124%)"
            offset="1"
          />
        </linearGradient>
        <clipPath id="2898b49359">
          <path
            d="M 191 71 L 219 71 L 219 125 L 191 125 Z M 191 71 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="121e1009e1">
          <path
            d="M 209.394531 124.328125 L 218.527344 111.285156 C 218.527344 111.285156 198.023438 93.203125 215.140625 71.605469 L 191.917969 82.546875 C 191.917969 82.546875 193.773438 123.613281 209.394531 124.328125 Z M 209.394531 124.328125 "
            clip-rule="nonzero"
          />
        </clipPath>
        <linearGradient
          x1="153.089666"
          gradientTransform="matrix(1.126795, 0.239759, -0.239508, 1.127978, -8.605037, 146.779906)"
          y1="-59.187125"
          x2="195.19959"
          gradientUnits="userSpaceOnUse"
          y2="-97.793462"
          id="793a35095e"
        >
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0.25"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0%, 27.49939%, 56.098938%)"
            offset="0.375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.0579834%, 27.54364%, 56.163025%)"
            offset="0.40625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.270081%, 27.705383%, 56.39801%)"
            offset="0.414062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.579834%, 27.938843%, 56.736755%)"
            offset="0.414183"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.735474%, 28.056335%, 56.907654%)"
            offset="0.421875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(0.889587%, 28.173828%, 57.077026%)"
            offset="0.429688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.200867%, 28.407288%, 57.417297%)"
            offset="0.4375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.51062%, 28.642273%, 57.757568%)"
            offset="0.445312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.820374%, 28.875732%, 58.097839%)"
            offset="0.453125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.130127%, 29.110718%, 58.43811%)"
            offset="0.460938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.43988%, 29.344177%, 58.776855%)"
            offset="0.46875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.749634%, 29.579163%, 59.117126%)"
            offset="0.476562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.059387%, 29.812622%, 59.457397%)"
            offset="0.484375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.369141%, 30.047607%, 59.797668%)"
            offset="0.492188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.678894%, 30.281067%, 60.137939%)"
            offset="0.5"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.988647%, 30.516052%, 60.47821%)"
            offset="0.507812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.298401%, 30.749512%, 60.816956%)"
            offset="0.515625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.608154%, 30.984497%, 61.157227%)"
            offset="0.523438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.917908%, 31.217957%, 61.497498%)"
            offset="0.53125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.227661%, 31.452942%, 61.837769%)"
            offset="0.539062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.537415%, 31.686401%, 62.17804%)"
            offset="0.546875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.847168%, 31.921387%, 62.518311%)"
            offset="0.554688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.156921%, 32.154846%, 62.858582%)"
            offset="0.5625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.466675%, 32.389832%, 63.197327%)"
            offset="0.570312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.776428%, 32.623291%, 63.537598%)"
            offset="0.578125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.086182%, 32.858276%, 63.877869%)"
            offset="0.585817"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.241821%, 32.975769%, 64.048767%)"
            offset="0.585938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.395935%, 33.091736%, 64.21814%)"
            offset="0.59375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.705688%, 33.326721%, 64.558411%)"
            offset="0.601562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.015442%, 33.560181%, 64.898682%)"
            offset="0.609375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.184814%, 33.688354%, 65.083313%)"
            offset="0.625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.198547%, 33.699036%, 65.098572%)"
            offset="0.75"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.198547%, 33.699036%, 65.098572%)"
            offset="1"
          />
        </linearGradient>
        <clipPath id="c5f198f12a">
          <path
            d="M 148 74 L 230 74 L 230 216 L 148 216 Z M 148 74 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="dd8e11280b">
          <path
            d="M 209.253906 74.1875 L 155.019531 99.742188 C 155.019531 99.742188 145.585938 104.597656 149.941406 113.820312 L 178.992188 175.539062 C 178.992188 175.539062 193.183594 201.464844 164.605469 215.429688 C 178.242188 208.992188 221.132812 188.640625 224.300781 187.140625 C 227.46875 185.640625 231.925781 177.730469 228.066406 169.542969 C 223.78125 160.421875 202.722656 115.078125 202.722656 115.078125 C 202.722656 115.078125 188.359375 89.457031 209.253906 74.1875 Z M 209.253906 74.1875 "
            clip-rule="nonzero"
          />
        </clipPath>
        <linearGradient
          x1="-368.702263"
          gradientTransform="matrix(0.490666, 1.043341, -1.042246, 0.491181, 2890.759935, -749.596722)"
          y1="2453.8799"
          x2="-225.964157"
          gradientUnits="userSpaceOnUse"
          y2="2453.8799"
          id="583f7099be"
        >
          <stop
            stop-opacity="1"
            stop-color="rgb(14.099121%, 42.399597%, 70.599365%)"
            offset="0"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.099121%, 42.399597%, 70.599365%)"
            offset="0.125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.099121%, 42.399597%, 70.599365%)"
            offset="0.15625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.099121%, 42.399597%, 70.599365%)"
            offset="0.164062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.821411%, 42.500305%, 70.809937%)"
            offset="0.167969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.545227%, 42.601013%, 71.020508%)"
            offset="0.171875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.182068%, 42.733765%, 71.296692%)"
            offset="0.175781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.818909%, 42.866516%, 71.572876%)"
            offset="0.179688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.45575%, 42.997742%, 71.847534%)"
            offset="0.183594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.09259%, 43.130493%, 72.123718%)"
            offset="0.1875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.729431%, 43.261719%, 72.399902%)"
            offset="0.191406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.366272%, 43.39447%, 72.676086%)"
            offset="0.195312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.003113%, 43.527222%, 72.952271%)"
            offset="0.199219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.639954%, 43.659973%, 73.228455%)"
            offset="0.203125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.276794%, 43.791199%, 73.503113%)"
            offset="0.207031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.913635%, 43.92395%, 73.779297%)"
            offset="0.210938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.54895%, 44.056702%, 74.055481%)"
            offset="0.214844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.185791%, 44.189453%, 74.331665%)"
            offset="0.21875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.822632%, 44.320679%, 74.607849%)"
            offset="0.222656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.459473%, 44.45343%, 74.884033%)"
            offset="0.226562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.096313%, 44.586182%, 75.158691%)"
            offset="0.230469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.733154%, 44.718933%, 75.434875%)"
            offset="0.234375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.369995%, 44.850159%, 75.71106%)"
            offset="0.238281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.006836%, 44.98291%, 75.987244%)"
            offset="0.242187"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.643677%, 45.115662%, 76.261902%)"
            offset="0.246094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.280518%, 45.248413%, 76.538086%)"
            offset="0.25"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.917358%, 45.379639%, 76.81427%)"
            offset="0.253906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.554199%, 45.51239%, 77.090454%)"
            offset="0.257812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.19104%, 45.645142%, 77.366638%)"
            offset="0.261719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.827881%, 45.777893%, 77.642822%)"
            offset="0.265625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.464722%, 45.909119%, 77.91748%)"
            offset="0.269531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.101562%, 46.04187%, 78.193665%)"
            offset="0.273437"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.738403%, 46.173096%, 78.469849%)"
            offset="0.277344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.375244%, 46.305847%, 78.746033%)"
            offset="0.28125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.012085%, 46.438599%, 79.022217%)"
            offset="0.285156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.648926%, 46.57135%, 79.298401%)"
            offset="0.289062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.285767%, 46.702576%, 79.573059%)"
            offset="0.292969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.922607%, 46.835327%, 79.849243%)"
            offset="0.296875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.560974%, 46.968079%, 80.123901%)"
            offset="0.300781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.200867%, 47.102356%, 80.400085%)"
            offset="0.304688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.394653%, 47.390747%, 80.532837%)"
            offset="0.308594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.58844%, 47.679138%, 80.665588%)"
            offset="0.3125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.782227%, 47.967529%, 80.79834%)"
            offset="0.316406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(1.976013%, 48.257446%, 80.931091%)"
            offset="0.320312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.1698%, 48.545837%, 81.063843%)"
            offset="0.324219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.363586%, 48.835754%, 81.196594%)"
            offset="0.328125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.557373%, 49.124146%, 81.329346%)"
            offset="0.332031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.752686%, 49.412537%, 81.462097%)"
            offset="0.335938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(2.946472%, 49.700928%, 81.594849%)"
            offset="0.339844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.140259%, 49.990845%, 81.729126%)"
            offset="0.34375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.334045%, 50.279236%, 81.861877%)"
            offset="0.347656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.527832%, 50.567627%, 81.994629%)"
            offset="0.351562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.721619%, 50.856018%, 82.12738%)"
            offset="0.355469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(3.915405%, 51.145935%, 82.260132%)"
            offset="0.359375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.109192%, 51.434326%, 82.392883%)"
            offset="0.363281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.302979%, 51.724243%, 82.525635%)"
            offset="0.367188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.496765%, 52.012634%, 82.658386%)"
            offset="0.371094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.690552%, 52.301025%, 82.791138%)"
            offset="0.375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(4.884338%, 52.589417%, 82.923889%)"
            offset="0.378906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.078125%, 52.879333%, 83.056641%)"
            offset="0.382812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.271912%, 53.167725%, 83.189392%)"
            offset="0.386719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.465698%, 53.456116%, 83.322144%)"
            offset="0.390625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.659485%, 53.744507%, 83.454895%)"
            offset="0.394531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(5.853271%, 54.034424%, 83.587646%)"
            offset="0.398438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.047058%, 54.322815%, 83.720398%)"
            offset="0.402344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.240845%, 54.612732%, 83.853149%)"
            offset="0.40625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.434631%, 54.901123%, 83.985901%)"
            offset="0.410156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.628418%, 55.189514%, 84.118652%)"
            offset="0.414062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(6.822205%, 55.477905%, 84.251404%)"
            offset="0.417969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.017517%, 55.767822%, 84.384155%)"
            offset="0.421875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.211304%, 56.056213%, 84.516907%)"
            offset="0.425781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.40509%, 56.344604%, 84.649658%)"
            offset="0.429688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.598877%, 56.632996%, 84.78241%)"
            offset="0.433594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.792664%, 56.922913%, 84.915161%)"
            offset="0.4375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(7.98645%, 57.211304%, 85.047913%)"
            offset="0.441406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.180237%, 57.501221%, 85.180664%)"
            offset="0.445312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.374023%, 57.789612%, 85.313416%)"
            offset="0.449219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.56781%, 58.078003%, 85.446167%)"
            offset="0.453125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.761597%, 58.366394%, 85.578918%)"
            offset="0.457031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(8.955383%, 58.656311%, 85.71167%)"
            offset="0.460938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.14917%, 58.944702%, 85.844421%)"
            offset="0.464844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.342957%, 59.233093%, 85.977173%)"
            offset="0.46875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.536743%, 59.521484%, 86.109924%)"
            offset="0.472656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.73053%, 59.811401%, 86.242676%)"
            offset="0.476562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(9.924316%, 60.099792%, 86.375427%)"
            offset="0.480469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.118103%, 60.389709%, 86.509705%)"
            offset="0.484375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.31189%, 60.678101%, 86.642456%)"
            offset="0.488281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.505676%, 60.966492%, 86.775208%)"
            offset="0.492188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.699463%, 61.254883%, 86.907959%)"
            offset="0.496094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(10.894775%, 61.5448%, 87.04071%)"
            offset="0.5"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.088562%, 61.833191%, 87.173462%)"
            offset="0.503906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.282349%, 62.121582%, 87.306213%)"
            offset="0.507812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.476135%, 62.409973%, 87.438965%)"
            offset="0.511719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.669922%, 62.69989%, 87.571716%)"
            offset="0.515625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(11.863708%, 62.988281%, 87.704468%)"
            offset="0.519531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.057495%, 63.278198%, 87.837219%)"
            offset="0.523438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.251282%, 63.566589%, 87.969971%)"
            offset="0.527344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.445068%, 63.85498%, 88.102722%)"
            offset="0.53125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.638855%, 64.143372%, 88.235474%)"
            offset="0.535156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(12.832642%, 64.433289%, 88.368225%)"
            offset="0.539062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.026428%, 64.72168%, 88.500977%)"
            offset="0.542969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.220215%, 65.010071%, 88.633728%)"
            offset="0.546875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.414001%, 65.298462%, 88.766479%)"
            offset="0.550781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.607788%, 65.588379%, 88.899231%)"
            offset="0.554688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.801575%, 65.87677%, 89.031982%)"
            offset="0.558594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(13.995361%, 66.166687%, 89.164734%)"
            offset="0.5625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.189148%, 66.455078%, 89.297485%)"
            offset="0.566406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.382935%, 66.743469%, 89.430237%)"
            offset="0.570312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.576721%, 67.03186%, 89.562988%)"
            offset="0.574219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.770508%, 67.321777%, 89.69574%)"
            offset="0.578125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.964294%, 67.610168%, 89.828491%)"
            offset="0.582031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.159607%, 67.89856%, 89.961243%)"
            offset="0.585938"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.353394%, 68.186951%, 90.093994%)"
            offset="0.589844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.54718%, 68.476868%, 90.226746%)"
            offset="0.59375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.740967%, 68.765259%, 90.359497%)"
            offset="0.597656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.934753%, 69.055176%, 90.492249%)"
            offset="0.601563"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.12854%, 69.343567%, 90.625%)"
            offset="0.605469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.322327%, 69.631958%, 90.757751%)"
            offset="0.609375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.516113%, 69.920349%, 90.890503%)"
            offset="0.613281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.7099%, 70.210266%, 91.02478%)"
            offset="0.617188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.903687%, 70.498657%, 91.157532%)"
            offset="0.621094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.097473%, 70.787048%, 91.290283%)"
            offset="0.625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.29126%, 71.075439%, 91.423035%)"
            offset="0.628906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.485046%, 71.365356%, 91.555786%)"
            offset="0.632812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.678833%, 71.653748%, 91.688538%)"
            offset="0.636719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.87262%, 71.943665%, 91.821289%)"
            offset="0.640625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.066406%, 72.232056%, 91.954041%)"
            offset="0.644531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.260193%, 72.520447%, 92.086792%)"
            offset="0.648438"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.453979%, 72.808838%, 92.219543%)"
            offset="0.652344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.647766%, 73.098755%, 92.352295%)"
            offset="0.65625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.841553%, 73.387146%, 92.485046%)"
            offset="0.660156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.036865%, 73.677063%, 92.617798%)"
            offset="0.664063"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.230652%, 73.965454%, 92.750549%)"
            offset="0.667969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.424438%, 74.253845%, 92.883301%)"
            offset="0.671875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.618225%, 74.542236%, 93.016052%)"
            offset="0.675781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.812012%, 74.832153%, 93.148804%)"
            offset="0.679688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.005798%, 75.120544%, 93.281555%)"
            offset="0.683594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.199585%, 75.408936%, 93.414307%)"
            offset="0.6875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.393372%, 75.697327%, 93.547058%)"
            offset="0.691406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.587158%, 75.987244%, 93.67981%)"
            offset="0.695312"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.780945%, 76.275635%, 93.812561%)"
            offset="0.699219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.974731%, 76.565552%, 93.945312%)"
            offset="0.703125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.994568%, 76.269531%, 93.713379%)"
            offset="0.707031"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(21.014404%, 75.975037%, 93.482971%)"
            offset="0.710937"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.793152%, 74.87793%, 92.749023%)"
            offset="0.714844"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.573425%, 73.780823%, 92.016602%)"
            offset="0.71875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.353699%, 72.683716%, 91.28418%)"
            offset="0.722656"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(20.133972%, 71.586609%, 90.551758%)"
            offset="0.726562"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.91272%, 70.489502%, 89.819336%)"
            offset="0.730469"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.692993%, 69.392395%, 89.086914%)"
            offset="0.734375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.473267%, 68.295288%, 88.354492%)"
            offset="0.738281"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.25354%, 67.198181%, 87.62207%)"
            offset="0.742188"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(19.032288%, 66.101074%, 86.889648%)"
            offset="0.746094"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.812561%, 65.003967%, 86.157227%)"
            offset="0.75"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.592834%, 63.90686%, 85.424805%)"
            offset="0.753906"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.373108%, 62.809753%, 84.692383%)"
            offset="0.757812"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(18.151855%, 61.712646%, 83.959961%)"
            offset="0.761719"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.932129%, 60.61554%, 83.227539%)"
            offset="0.765625"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.712402%, 59.518433%, 82.493591%)"
            offset="0.769531"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.492676%, 58.421326%, 81.761169%)"
            offset="0.773437"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.271423%, 57.324219%, 81.028748%)"
            offset="0.777344"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(17.051697%, 56.227112%, 80.296326%)"
            offset="0.78125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.83197%, 55.130005%, 79.563904%)"
            offset="0.785156"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.612244%, 54.032898%, 78.831482%)"
            offset="0.789062"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.390991%, 52.935791%, 78.09906%)"
            offset="0.792969"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(16.171265%, 51.838684%, 77.366638%)"
            offset="0.796875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.951538%, 50.741577%, 76.634216%)"
            offset="0.800781"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.731812%, 49.64447%, 75.901794%)"
            offset="0.804688"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.512085%, 48.547363%, 75.169373%)"
            offset="0.808594"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.292358%, 47.450256%, 74.436951%)"
            offset="0.8125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(15.071106%, 46.351624%, 73.704529%)"
            offset="0.816406"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.851379%, 45.254517%, 72.972107%)"
            offset="0.820313"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.674377%, 44.377136%, 72.384644%)"
            offset="0.824219"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.498901%, 43.499756%, 71.798706%)"
            offset="0.828125"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.498901%, 43.499756%, 71.798706%)"
            offset="0.84375"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.498901%, 43.499756%, 71.798706%)"
            offset="0.875"
          />
          <stop
            stop-opacity="1"
            stop-color="rgb(14.498901%, 43.499756%, 71.798706%)"
            offset="1"
          />
        </linearGradient>
      </defs>
      <g clip-path="url(#2a2acf67db)">
        <g clip-path="url(#7366399e77)">
          <path
            fill="url(#d3b3f36ac2)"
            d="M 177.152344 133.464844 L 94.929688 172.210938 L 135.445312 258.359375 L 217.664062 219.609375 Z M 177.152344 133.464844 "
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#9303bedc95)">
        <g clip-path="url(#7525152bcd)">
          <path
            fill="url(#29b240f587)"
            d="M 183.265625 152.21875 L 141.183594 172.054688 L 166.3125 225.488281 L 208.394531 205.652344 Z M 183.265625 152.21875 "
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#558c211e41)">
        <g clip-path="url(#c4eaade7c2)">
          <path
            fill="url(#fd06bb0d2a)"
            d="M 243.691406 28.601562 L 161.460938 67.351562 L 201.976562 153.503906 L 284.207031 114.753906 Z M 243.691406 28.601562 "
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#2898b49359)">
        <g clip-path="url(#121e1009e1)">
          <path
            fill="url(#793a35095e)"
            d="M 193.066406 66.1875 L 181.207031 122.046875 L 217.378906 129.746094 L 229.238281 73.882812 Z M 193.066406 66.1875 "
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#c5f198f12a)">
        <g clip-path="url(#dd8e11280b)">
          <path
            fill="url(#583f7099be)"
            d="M 216.261719 40.878906 L 91.214844 99.8125 L 161.25 248.734375 L 286.296875 189.804688 Z M 216.261719 40.878906 "
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g fill="#545454" fill-opacity="1">
        <g transform="translate(110.086197, 294.232816)">
          <g>
            <path d="M 44.15625 -38.390625 L 27.921875 0 L 15.1875 0 L -1.046875 -38.390625 L 12.890625 -38.390625 L 22.046875 -15.953125 L 31.421875 -38.390625 Z M 44.15625 -38.390625 " />
          </g>
        </g>
      </g>
      <g fill="#545454" fill-opacity="1">
        <g transform="translate(153.186495, 294.232816)">
          <g>
            <path d="M 23.25 0.875 C 19.125 0.875 15.414062 0.015625 12.125 -1.703125 C 8.832031 -3.421875 6.253906 -5.804688 4.390625 -8.859375 C 2.523438 -11.910156 1.59375 -15.351562 1.59375 -19.1875 C 1.59375 -23.03125 2.523438 -26.476562 4.390625 -29.53125 C 6.253906 -32.582031 8.832031 -34.96875 12.125 -36.6875 C 15.414062 -38.40625 19.125 -39.265625 23.25 -39.265625 C 27.382812 -39.265625 31.097656 -38.40625 34.390625 -36.6875 C 37.679688 -34.96875 40.257812 -32.582031 42.125 -29.53125 C 43.988281 -26.476562 44.921875 -23.03125 44.921875 -19.1875 C 44.921875 -15.351562 43.988281 -11.910156 42.125 -8.859375 C 40.257812 -5.804688 37.679688 -3.421875 34.390625 -1.703125 C 31.097656 0.015625 27.382812 0.875 23.25 0.875 Z M 23.25 -9.59375 C 24.863281 -9.59375 26.316406 -9.984375 27.609375 -10.765625 C 28.910156 -11.554688 29.941406 -12.671875 30.703125 -14.109375 C 31.472656 -15.554688 31.859375 -17.25 31.859375 -19.1875 C 31.859375 -21.132812 31.472656 -22.828125 30.703125 -24.265625 C 29.941406 -25.710938 28.910156 -26.828125 27.609375 -27.609375 C 26.316406 -28.398438 24.863281 -28.796875 23.25 -28.796875 C 21.644531 -28.796875 20.191406 -28.398438 18.890625 -27.609375 C 17.597656 -26.828125 16.566406 -25.710938 15.796875 -24.265625 C 15.023438 -22.828125 14.640625 -21.132812 14.640625 -19.1875 C 14.640625 -17.25 15.023438 -15.554688 15.796875 -14.109375 C 16.566406 -12.671875 17.597656 -11.554688 18.890625 -10.765625 C 20.191406 -9.984375 21.644531 -9.59375 23.25 -9.59375 Z M 23.25 -9.59375 " />
          </g>
        </g>
      </g>
      <g fill="#545454" fill-opacity="1">
        <g transform="translate(199.686556, 294.232816)">
          <g>
            <path d="M 3.125 -38.390625 L 16.0625 -38.390625 L 16.0625 -10.03125 L 33.40625 -10.03125 L 33.40625 0 L 3.125 0 Z M 3.125 -38.390625 " />
          </g>
        </g>
      </g>
      <g fill="#545454" fill-opacity="1">
        <g transform="translate(233.519733, 294.232816)">
          <g>
            <path d="M 11.46875 -28.359375 L 0.21875 -28.359375 L 0.21875 -38.390625 L 35.640625 -38.390625 L 35.640625 -28.359375 L 24.40625 -28.359375 L 24.40625 0 L 11.46875 0 Z M 11.46875 -28.359375 " />
          </g>
        </g>
      </g>
    </svg>
  );
  return <>{svg}</>;
}
