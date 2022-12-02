import { useState, useEffect } from "react";
import "./Loading.css";

const Loading = () => {
  const [step, setStep] = useState(0);

  function displayStep(i: number) {
    return {
      display: step === i ? "block" : "none",
    };
  }

  useEffect(() => {
    function updateStep() {
      setStep((step) => {
        if (step < 3) return step + 1;
        else return 0;
      });
    }
    const interval = setInterval(updateStep, 260);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="loading">
        <g style={displayStep(0)}>
          <svg
            width="844"
            height="438"
            viewBox="0 0 844 438"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9333 58.5334C12.9333 61.4667 6.66667 67.2 3.2 74.6667L0 81.7334L0.266667 220.8C0.666667 347.467 0.8 360.4 2.93333 364C6 369.6 11.6 375.067 18 378.4C22.9333 381.067 25.7333 381.333 62 382L100.533 382.667L102.133 388C109.333 412.8 132.8 432.933 159.067 436.8C192.667 441.733 226 420.667 235.467 388.533L237.467 382H348.533H459.6L461.2 387.6C466.267 404.8 480.8 422.267 496.133 429.867C529.2 446.133 566.267 436.133 586.8 405.467C589.733 401.067 593.067 394.133 594.4 389.867L596.667 382.267L628 381.733C656.933 381.333 659.733 381.067 664.667 378.4C670.933 375.067 676.667 369.6 679.733 364C681.867 360.4 682 349.333 682 241.333V122.667L679.067 113.2C671.6 89.7334 652.133 69.8667 627.867 60.9334L618 57.3334L409.067 56.9334L200.267 56.6667L196.667 59.6C192 63.6 191.733 70.1334 196 74.6667L199.067 78H401.2C532 78 606.267 78.5334 611.733 79.3334C624 81.3334 634.133 86.6667 643.333 96C649.867 102.533 658.667 116.267 658.667 119.867C658.667 120.267 609.733 120.667 550 120.667H441.333V116.667C441.333 112.267 437.6 107.733 433.067 106.667C431.333 106.267 392.4 106.133 346.533 106.267C266.8 106.667 262.8 106.8 260.133 109.2C258.667 110.533 257.067 113.733 256.533 116.133L255.733 120.667H164C69.4667 120.667 65.4667 120.933 62.6667 126C61.8667 127.6 61.3333 153.733 61.3333 193.733C61.3333 256 61.4667 259.2 63.8667 262.133L66.4 265.333L161.2 265.733L256 266V312.667V359.333H247.333C239.067 359.333 238.667 359.2 237.867 355.6C230.267 321.067 202.533 298 168.667 298C138.8 298 112.4 317.067 102.533 345.6C101.2 349.733 100 354.533 100 356.267V359.333H63.7333C43.7333 359.333 26.6667 358.8 25.8667 358.267C23.2 356.533 21.3333 351.6 21.3333 346.267V341.067L30.5333 340.267C41.7333 339.333 48.8 336 55.0667 328.533C65.4667 316.4 64.2667 298.4 52.4 287.067C47.3333 282.133 40.6667 279.6 30.1333 278.533L21.3333 277.6V181.333C21.3333 88.4 21.4667 84.8 23.8667 81.8667L26.4 78.6667L99.0667 78.2667L171.6 78L174.667 74.6667C178.933 70.1334 178.533 63.6 174 59.6L170.533 56.6667H98.2667C41.3333 56.8 24.9333 57.2 20.9333 58.5334ZM338 186V244L308.4 244.4L278.667 244.667V186V127.333L308.4 127.6L338 128V186ZM420 186V244.667H390H360V186V127.333H390H420V186ZM158.4 193.6L158 244L120.4 244.4L82.6667 244.667V194V143.333H120.667H158.667L158.4 193.6ZM255.733 193.6L255.333 244L217.733 244.4L180 244.667V194V143.333H218H256L255.733 193.6ZM517.333 194V244.667H479.333H441.333V194V143.333H479.333H517.333V194ZM661.333 194V244.667H625.733C591.067 244.667 590.133 244.8 587.067 247.6C583.2 251.2 583.067 257.867 586.533 262.133L589.067 265.333L625.2 265.733L661.333 266.133V271.867V277.6L647.2 278.4C634.933 279.067 632.267 279.733 626.267 283.067C602 296.667 607.6 333.333 634.8 339.2C638.4 340 646 340.667 651.333 340.667H661.333V346.133C661.333 351.6 659.467 356.533 656.8 358.267C656 358.8 642.4 359.333 626.533 359.333H597.6L596.8 353.333C596.267 350 593.467 342.667 590.667 336.933C572.933 301.733 531.733 288.133 496 305.733C479.867 313.6 463.6 334.533 460 352L458.533 359.333H449.867H441.333V312.667V266H501.2C558.8 266 561.067 265.867 564.4 263.333C568.8 259.867 569.867 254.933 567.467 250.133C564.8 245.2 563.2 244.667 549.867 244.667H538.667V194V143.333H600H661.333V194ZM420 311.333V356.667H349.333H278.667V311.333V266H349.333H420V311.333ZM37.7333 302.933C41.0667 306.8 41.2 312.667 37.8667 315.867C36.5333 317.333 33.3333 318 28.5333 318H21.3333V309.333V300.667H28.4C33.6 300.667 36.1333 301.333 37.7333 302.933ZM661.333 309.333V318H648.8C637.2 318 636 317.733 634.133 315.067C631.2 310.933 631.467 306.533 634.667 303.333C636.933 301.067 639.067 300.667 649.333 300.667H661.333V309.333ZM188.533 323.733C210.133 333.6 221.733 358 215.333 380.133C204.933 416.267 161.2 428.133 134.667 401.733C114.133 381.333 116.8 346.4 140.267 329.067C154.267 318.933 173.2 316.8 188.533 323.733ZM548.4 324.4C558.667 329.2 567.333 337.733 571.867 347.333C574.933 353.733 575.333 356.4 575.333 368C575.333 380.133 574.933 382 571.333 389.067C557.067 417.333 520 424.667 496.4 404C491.733 399.867 488 394.933 485.067 388.933C481.067 380.933 480.667 378.933 480.667 368C480.667 357.6 481.2 354.933 484.4 348C490.667 334.533 502.933 324.267 516.933 320.667C525.733 318.533 539.333 320.133 548.4 324.4Z"
              fill="white"
            />
            <path
              d="M158.8 338.533C152.533 340.8 144.4 348 141.467 353.733C133.733 369.2 139.733 387.733 155.2 395.6C162.267 399.2 174.667 399.467 181.333 396.133C193.867 389.733 201.067 377.2 199.6 364.4C197.2 344.8 176.933 332 158.8 338.533ZM172.667 359.333C180 362.133 179.6 374.267 172.133 376.267C165.2 378.133 160 374.667 160 368.133C160 363.333 160.933 361.733 164.667 359.6C168 357.733 168.4 357.733 172.667 359.333Z"
              fill="white"
            />
            <path
              d="M520 337.867C506.133 342.133 497.467 353.733 497.333 368.133C497.2 393.2 526.8 407.6 546.933 392.267C560.933 381.467 562.933 359.6 550.933 346.8C543.467 338.8 529.867 334.933 520 337.867ZM533.867 360.8C540.8 366.267 537.2 376.667 528.4 376.667C515.467 376.667 515.867 358.8 528.8 358.133C529.6 358 531.867 359.2 533.867 360.8Z"
              fill="white"
            />
            <rect x="559" y="177" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="644" y="110" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="370" width="258" height="20" rx="10" fill="#EE9F2E" />
            <rect x="270" y="285" width="258" height="20" rx="10" fill="#EE9F2E" />
          </svg>
        </g>
        <g style={displayStep(1)}>
          <svg
            width="714"
            height="433"
            viewBox="0 0 714 433"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.9333 53.5334C12.9333 56.4667 6.66667 62.2 3.2 69.6667L0 76.7334L0.266667 215.8C0.666667 342.467 0.8 355.4 2.93333 359C6 364.6 11.6 370.067 18 373.4C22.9333 376.067 25.7333 376.333 62 377L100.533 377.667L102.133 383C109.333 407.8 132.8 427.933 159.067 431.8C192.667 436.733 226 415.667 235.467 383.533L237.467 377H348.533H459.6L461.2 382.6C466.267 399.8 480.8 417.267 496.133 424.867C529.2 441.133 566.267 431.133 586.8 400.467C589.733 396.067 593.067 389.133 594.4 384.867L596.667 377.267L628 376.733C656.933 376.333 659.733 376.067 664.667 373.4C670.933 370.067 676.667 364.6 679.733 359C681.867 355.4 682 344.333 682 236.333V117.667L679.067 108.2C671.6 84.7334 652.133 64.8667 627.867 55.9334L618 52.3334L409.067 51.9334L200.267 51.6667L196.667 54.6C192 58.6 191.733 65.1334 196 69.6667L199.067 73H401.2C532 73 606.267 73.5334 611.733 74.3334C624 76.3334 634.133 81.6667 643.333 91C649.867 97.5334 658.667 111.267 658.667 114.867C658.667 115.267 609.733 115.667 550 115.667H441.333V111.667C441.333 107.267 437.6 102.733 433.067 101.667C431.333 101.267 392.4 101.133 346.533 101.267C266.8 101.667 262.8 101.8 260.133 104.2C258.667 105.533 257.067 108.733 256.533 111.133L255.733 115.667H164C69.4667 115.667 65.4667 115.933 62.6667 121C61.8667 122.6 61.3333 148.733 61.3333 188.733C61.3333 251 61.4667 254.2 63.8667 257.133L66.4 260.333L161.2 260.733L256 261V307.667V354.333H247.333C239.067 354.333 238.667 354.2 237.867 350.6C230.267 316.067 202.533 293 168.667 293C138.8 293 112.4 312.067 102.533 340.6C101.2 344.733 100 349.533 100 351.267V354.333H63.7333C43.7333 354.333 26.6667 353.8 25.8667 353.267C23.2 351.533 21.3333 346.6 21.3333 341.267V336.067L30.5333 335.267C41.7333 334.333 48.8 331 55.0667 323.533C65.4667 311.4 64.2667 293.4 52.4 282.067C47.3333 277.133 40.6667 274.6 30.1333 273.533L21.3333 272.6V176.333C21.3333 83.4 21.4667 79.8 23.8667 76.8667L26.4 73.6667L99.0667 73.2667L171.6 73L174.667 69.6667C178.933 65.1334 178.533 58.6 174 54.6L170.533 51.6667H98.2667C41.3333 51.8 24.9333 52.2 20.9333 53.5334ZM338 181V239L308.4 239.4L278.667 239.667V181V122.333L308.4 122.6L338 123V181ZM420 181V239.667H390H360V181V122.333H390H420V181ZM158.4 188.6L158 239L120.4 239.4L82.6667 239.667V189V138.333H120.667H158.667L158.4 188.6ZM255.733 188.6L255.333 239L217.733 239.4L180 239.667V189V138.333H218H256L255.733 188.6ZM517.333 189V239.667H479.333H441.333V189V138.333H479.333H517.333V189ZM661.333 189V239.667H625.733C591.067 239.667 590.133 239.8 587.067 242.6C583.2 246.2 583.067 252.867 586.533 257.133L589.067 260.333L625.2 260.733L661.333 261.133V266.867V272.6L647.2 273.4C634.933 274.067 632.267 274.733 626.267 278.067C602 291.667 607.6 328.333 634.8 334.2C638.4 335 646 335.667 651.333 335.667H661.333V341.133C661.333 346.6 659.467 351.533 656.8 353.267C656 353.8 642.4 354.333 626.533 354.333H597.6L596.8 348.333C596.267 345 593.467 337.667 590.667 331.933C572.933 296.733 531.733 283.133 496 300.733C479.867 308.6 463.6 329.533 460 347L458.533 354.333H449.867H441.333V307.667V261H501.2C558.8 261 561.067 260.867 564.4 258.333C568.8 254.867 569.867 249.933 567.467 245.133C564.8 240.2 563.2 239.667 549.867 239.667H538.667V189V138.333H600H661.333V189ZM420 306.333V351.667H349.333H278.667V306.333V261H349.333H420V306.333ZM37.7333 297.933C41.0667 301.8 41.2 307.667 37.8667 310.867C36.5333 312.333 33.3333 313 28.5333 313H21.3333V304.333V295.667H28.4C33.6 295.667 36.1333 296.333 37.7333 297.933ZM661.333 304.333V313H648.8C637.2 313 636 312.733 634.133 310.067C631.2 305.933 631.467 301.533 634.667 298.333C636.933 296.067 639.067 295.667 649.333 295.667H661.333V304.333ZM188.533 318.733C210.133 328.6 221.733 353 215.333 375.133C204.933 411.267 161.2 423.133 134.667 396.733C114.133 376.333 116.8 341.4 140.267 324.067C154.267 313.933 173.2 311.8 188.533 318.733ZM548.4 319.4C558.667 324.2 567.333 332.733 571.867 342.333C574.933 348.733 575.333 351.4 575.333 363C575.333 375.133 574.933 377 571.333 384.067C557.067 412.333 520 419.667 496.4 399C491.733 394.867 488 389.933 485.067 383.933C481.067 375.933 480.667 373.933 480.667 363C480.667 352.6 481.2 349.933 484.4 343C490.667 329.533 502.933 319.267 516.933 315.667C525.733 313.533 539.333 315.133 548.4 319.4Z"
              fill="white"
            />
            <path
              d="M158.8 333.533C152.533 335.8 144.4 343 141.467 348.733C133.733 364.2 139.733 382.733 155.2 390.6C162.267 394.2 174.667 394.467 181.333 391.133C193.867 384.733 201.067 372.2 199.6 359.4C197.2 339.8 176.933 327 158.8 333.533ZM172.667 354.333C180 357.133 179.6 369.267 172.133 371.267C165.2 373.133 160 369.667 160 363.133C160 358.333 160.933 356.733 164.667 354.6C168 352.733 168.4 352.733 172.667 354.333Z"
              fill="white"
            />
            <path
              d="M520 332.867C506.133 337.133 497.467 348.733 497.333 363.133C497.2 388.2 526.8 402.6 546.933 387.267C560.933 376.467 562.933 354.6 550.933 341.8C543.467 333.8 529.867 329.933 520 332.867ZM533.867 355.8C540.8 361.267 537.2 371.667 528.4 371.667C515.467 371.667 515.867 353.8 528.8 353.133C529.6 353 531.867 354.2 533.867 355.8Z"
              fill="white"
            />
            <rect x="341" y="190" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="185" width="258" height="20" rx="10" fill="#EE9F2E" />
            <rect x="71" y="290" width="258" height="20" rx="10" fill="#EE9F2E" />
            <rect x="456" y="141" width="258" height="20" rx="10" fill="#EE9F2E" />
          </svg>
        </g>
        <g style={displayStep(2)}>
          <svg
            width="802"
            height="423"
            viewBox="0 0 802 423"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M140.933 43.5334C132.933 46.4667 126.667 52.2 123.2 59.6667L120 66.7334L120.267 205.8C120.667 332.467 120.8 345.4 122.933 349C126 354.6 131.6 360.067 138 363.4C142.933 366.067 145.733 366.333 182 367L220.533 367.667L222.133 373C229.333 397.8 252.8 417.933 279.067 421.8C312.667 426.733 346 405.667 355.467 373.533L357.467 367H468.533H579.6L581.2 372.6C586.267 389.8 600.8 407.267 616.133 414.867C649.2 431.133 686.267 421.133 706.8 390.467C709.733 386.067 713.067 379.133 714.4 374.867L716.667 367.267L748 366.733C776.933 366.333 779.733 366.067 784.667 363.4C790.933 360.067 796.667 354.6 799.733 349C801.867 345.4 802 334.333 802 226.333V107.667L799.067 98.2C791.6 74.7334 772.133 54.8667 747.867 45.9334L738 42.3334L529.067 41.9334L320.267 41.6667L316.667 44.6C312 48.6 311.733 55.1334 316 59.6667L319.067 63H521.2C652 63 726.267 63.5334 731.733 64.3334C744 66.3334 754.133 71.6667 763.333 81C769.867 87.5334 778.667 101.267 778.667 104.867C778.667 105.267 729.733 105.667 670 105.667H561.333V101.667C561.333 97.2667 557.6 92.7334 553.067 91.6667C551.333 91.2667 512.4 91.1334 466.533 91.2667C386.8 91.6667 382.8 91.8 380.133 94.2C378.667 95.5334 377.067 98.7334 376.533 101.133L375.733 105.667H284C189.467 105.667 185.467 105.933 182.667 111C181.867 112.6 181.333 138.733 181.333 178.733C181.333 241 181.467 244.2 183.867 247.133L186.4 250.333L281.2 250.733L376 251V297.667V344.333H367.333C359.067 344.333 358.667 344.2 357.867 340.6C350.267 306.067 322.533 283 288.667 283C258.8 283 232.4 302.067 222.533 330.6C221.2 334.733 220 339.533 220 341.267V344.333H183.733C163.733 344.333 146.667 343.8 145.867 343.267C143.2 341.533 141.333 336.6 141.333 331.267V326.067L150.533 325.267C161.733 324.333 168.8 321 175.067 313.533C185.467 301.4 184.267 283.4 172.4 272.067C167.333 267.133 160.667 264.6 150.133 263.533L141.333 262.6V166.333C141.333 73.4 141.467 69.8 143.867 66.8667L146.4 63.6667L219.067 63.2667L291.6 63L294.667 59.6667C298.933 55.1334 298.533 48.6 294 44.6L290.533 41.6667H218.267C161.333 41.8 144.933 42.2 140.933 43.5334ZM458 171V229L428.4 229.4L398.667 229.667V171V112.333L428.4 112.6L458 113V171ZM540 171V229.667H510H480V171V112.333H510H540V171ZM278.4 178.6L278 229L240.4 229.4L202.667 229.667V179V128.333H240.667H278.667L278.4 178.6ZM375.733 178.6L375.333 229L337.733 229.4L300 229.667V179V128.333H338H376L375.733 178.6ZM637.333 179V229.667H599.333H561.333V179V128.333H599.333H637.333V179ZM781.333 179V229.667H745.733C711.067 229.667 710.133 229.8 707.067 232.6C703.2 236.2 703.067 242.867 706.533 247.133L709.067 250.333L745.2 250.733L781.333 251.133V256.867V262.6L767.2 263.4C754.933 264.067 752.267 264.733 746.267 268.067C722 281.667 727.6 318.333 754.8 324.2C758.4 325 766 325.667 771.333 325.667H781.333V331.133C781.333 336.6 779.467 341.533 776.8 343.267C776 343.8 762.4 344.333 746.533 344.333H717.6L716.8 338.333C716.267 335 713.467 327.667 710.667 321.933C692.933 286.733 651.733 273.133 616 290.733C599.867 298.6 583.6 319.533 580 337L578.533 344.333H569.867H561.333V297.667V251H621.2C678.8 251 681.067 250.867 684.4 248.333C688.8 244.867 689.867 239.933 687.467 235.133C684.8 230.2 683.2 229.667 669.867 229.667H658.667V179V128.333H720H781.333V179ZM540 296.333V341.667H469.333H398.667V296.333V251H469.333H540V296.333ZM157.733 287.933C161.067 291.8 161.2 297.667 157.867 300.867C156.533 302.333 153.333 303 148.533 303H141.333V294.333V285.667H148.4C153.6 285.667 156.133 286.333 157.733 287.933ZM781.333 294.333V303H768.8C757.2 303 756 302.733 754.133 300.067C751.2 295.933 751.467 291.533 754.667 288.333C756.933 286.067 759.067 285.667 769.333 285.667H781.333V294.333ZM308.533 308.733C330.133 318.6 341.733 343 335.333 365.133C324.933 401.267 281.2 413.133 254.667 386.733C234.133 366.333 236.8 331.4 260.267 314.067C274.267 303.933 293.2 301.8 308.533 308.733ZM668.4 309.4C678.667 314.2 687.333 322.733 691.867 332.333C694.933 338.733 695.333 341.4 695.333 353C695.333 365.133 694.933 367 691.333 374.067C677.067 402.333 640 409.667 616.4 389C611.733 384.867 608 379.933 605.067 373.933C601.067 365.933 600.667 363.933 600.667 353C600.667 342.6 601.2 339.933 604.4 333C610.667 319.533 622.933 309.267 636.933 305.667C645.733 303.533 659.333 305.133 668.4 309.4Z"
              fill="white"
            />
            <path
              d="M278.8 323.533C272.533 325.8 264.4 333 261.467 338.733C253.733 354.2 259.733 372.733 275.2 380.6C282.267 384.2 294.667 384.467 301.333 381.133C313.867 374.733 321.067 362.2 319.6 349.4C317.2 329.8 296.933 317 278.8 323.533ZM292.667 344.333C300 347.133 299.6 359.267 292.133 361.267C285.2 363.133 280 359.667 280 353.133C280 348.333 280.933 346.733 284.667 344.6C288 342.733 288.4 342.733 292.667 344.333Z"
              fill="white"
            />
            <path
              d="M640 322.867C626.133 327.133 617.467 338.733 617.333 353.133C617.2 378.2 646.8 392.6 666.933 377.267C680.933 366.467 682.933 344.6 670.933 331.8C663.467 323.8 649.867 319.933 640 322.867ZM653.867 345.8C660.8 351.267 657.2 361.667 648.4 361.667C635.467 361.667 635.867 343.8 648.8 343.133C649.6 343 651.867 344.2 653.867 345.8Z"
              fill="white"
            />
            <rect x="258" y="177" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="320" y="118" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="129" width="258" height="20" rx="10" fill="#EE9F2E" />
            <rect y="288" width="258" height="20" rx="10" fill="#EE9F2E" />
          </svg>
        </g>
        <g style={displayStep(3)}>
          <svg
            width="913"
            height="420"
            viewBox="0 0 913 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M251.933 40.5334C243.933 43.4667 237.667 49.2001 234.2 56.6667L231 63.7334L231.267 202.8C231.667 329.467 231.8 342.4 233.933 346C237 351.6 242.6 357.067 249 360.4C253.933 363.067 256.733 363.333 293 364L331.533 364.667L333.133 370C340.333 394.8 363.8 414.933 390.067 418.8C423.667 423.733 457 402.667 466.467 370.533L468.467 364H579.533H690.6L692.2 369.6C697.267 386.8 711.8 404.267 727.133 411.867C760.2 428.133 797.267 418.133 817.8 387.467C820.733 383.067 824.067 376.133 825.4 371.867L827.667 364.267L859 363.733C887.933 363.333 890.733 363.067 895.667 360.4C901.933 357.067 907.667 351.6 910.733 346C912.867 342.4 913 331.333 913 223.333V104.667L910.067 95.2001C902.6 71.7334 883.133 51.8667 858.867 42.9334L849 39.3334L640.067 38.9334L431.267 38.6667L427.667 41.6001C423 45.6001 422.733 52.1334 427 56.6667L430.067 60.0001H632.2C763 60.0001 837.267 60.5334 842.733 61.3334C855 63.3334 865.133 68.6667 874.333 78.0001C880.867 84.5334 889.667 98.2667 889.667 101.867C889.667 102.267 840.733 102.667 781 102.667H672.333V98.6667C672.333 94.2667 668.6 89.7334 664.067 88.6667C662.333 88.2667 623.4 88.1334 577.533 88.2667C497.8 88.6667 493.8 88.8001 491.133 91.2001C489.667 92.5334 488.067 95.7334 487.533 98.1334L486.733 102.667H395C300.467 102.667 296.467 102.933 293.667 108C292.867 109.6 292.333 135.733 292.333 175.733C292.333 238 292.467 241.2 294.867 244.133L297.4 247.333L392.2 247.733L487 248V294.667V341.333H478.333C470.067 341.333 469.667 341.2 468.867 337.6C461.267 303.067 433.533 280 399.667 280C369.8 280 343.4 299.067 333.533 327.6C332.2 331.733 331 336.533 331 338.267V341.333H294.733C274.733 341.333 257.667 340.8 256.867 340.267C254.2 338.533 252.333 333.6 252.333 328.267V323.067L261.533 322.267C272.733 321.333 279.8 318 286.067 310.533C296.467 298.4 295.267 280.4 283.4 269.067C278.333 264.133 271.667 261.6 261.133 260.533L252.333 259.6V163.333C252.333 70.4001 252.467 66.8001 254.867 63.8667L257.4 60.6667L330.067 60.2667L402.6 60.0001L405.667 56.6667C409.933 52.1334 409.533 45.6001 405 41.6001L401.533 38.6667H329.267C272.333 38.8001 255.933 39.2001 251.933 40.5334ZM569 168V226L539.4 226.4L509.667 226.667V168V109.333L539.4 109.6L569 110V168ZM651 168V226.667H621H591V168V109.333H621H651V168ZM389.4 175.6L389 226L351.4 226.4L313.667 226.667V176V125.333H351.667H389.667L389.4 175.6ZM486.733 175.6L486.333 226L448.733 226.4L411 226.667V176V125.333H449H487L486.733 175.6ZM748.333 176V226.667H710.333H672.333V176V125.333H710.333H748.333V176ZM892.333 176V226.667H856.733C822.067 226.667 821.133 226.8 818.067 229.6C814.2 233.2 814.067 239.867 817.533 244.133L820.067 247.333L856.2 247.733L892.333 248.133V253.867V259.6L878.2 260.4C865.933 261.067 863.267 261.733 857.267 265.067C833 278.667 838.6 315.333 865.8 321.2C869.4 322 877 322.667 882.333 322.667H892.333V328.133C892.333 333.6 890.467 338.533 887.8 340.267C887 340.8 873.4 341.333 857.533 341.333H828.6L827.8 335.333C827.267 332 824.467 324.667 821.667 318.933C803.933 283.733 762.733 270.133 727 287.733C710.867 295.6 694.6 316.533 691 334L689.533 341.333H680.867H672.333V294.667V248H732.2C789.8 248 792.067 247.867 795.4 245.333C799.8 241.867 800.867 236.933 798.467 232.133C795.8 227.2 794.2 226.667 780.867 226.667H769.667V176V125.333H831H892.333V176ZM651 293.333V338.667H580.333H509.667V293.333V248H580.333H651V293.333ZM268.733 284.933C272.067 288.8 272.2 294.667 268.867 297.867C267.533 299.333 264.333 300 259.533 300H252.333V291.333V282.667H259.4C264.6 282.667 267.133 283.333 268.733 284.933ZM892.333 291.333V300H879.8C868.2 300 867 299.733 865.133 297.067C862.2 292.933 862.467 288.533 865.667 285.333C867.933 283.067 870.067 282.667 880.333 282.667H892.333V291.333ZM419.533 305.733C441.133 315.6 452.733 340 446.333 362.133C435.933 398.267 392.2 410.133 365.667 383.733C345.133 363.333 347.8 328.4 371.267 311.067C385.267 300.933 404.2 298.8 419.533 305.733ZM779.4 306.4C789.667 311.2 798.333 319.733 802.867 329.333C805.933 335.733 806.333 338.4 806.333 350C806.333 362.133 805.933 364 802.333 371.067C788.067 399.333 751 406.667 727.4 386C722.733 381.867 719 376.933 716.067 370.933C712.067 362.933 711.667 360.933 711.667 350C711.667 339.6 712.2 336.933 715.4 330C721.667 316.533 733.933 306.267 747.933 302.667C756.733 300.533 770.333 302.133 779.4 306.4Z"
              fill="white"
            />
            <path
              d="M389.8 320.533C383.533 322.8 375.4 330 372.467 335.733C364.733 351.2 370.733 369.733 386.2 377.6C393.267 381.2 405.667 381.467 412.333 378.133C424.867 371.733 432.067 359.2 430.6 346.4C428.2 326.8 407.933 314 389.8 320.533ZM403.667 341.333C411 344.133 410.6 356.267 403.133 358.267C396.2 360.133 391 356.667 391 350.133C391 345.333 391.933 343.733 395.667 341.6C399 339.733 399.4 339.733 403.667 341.333Z"
              fill="white"
            />
            <path
              d="M751 319.867C737.133 324.133 728.467 335.733 728.333 350.133C728.2 375.2 757.8 389.6 777.933 374.267C791.933 363.467 793.933 341.6 781.933 328.8C774.467 320.8 760.867 316.933 751 319.867ZM764.867 342.8C771.8 348.267 768.2 358.667 759.4 358.667C746.467 358.667 746.867 340.8 759.8 340.133C760.6 340 762.867 341.2 764.867 342.8Z"
              fill="white"
            />
            <rect x="169" y="187" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="269" y="133" width="200" height="20" rx="10" fill="#EE9F2E" />
            <rect x="83" width="258" height="20" rx="10" fill="#EE9F2E" />
            <rect y="282" width="169" height="20" rx="10" fill="#EE9F2E" />
          </svg>
        </g>
      </div>
    </div>
  );
};

export default Loading;
