import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class=" w-screen fade-border dark:bg-[#2A5D3233]  backdrop-blur-md top-0 left-0">
        <div class="max-w-screen-xl navBorder  flex flex-wrap  items-center justify-center mx-auto py-[24px] self-stretch  gap-[387px]">
          <a
            href="https://flowbite.com/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="24"
              viewBox="0 0 100 24"
              fill="none"
            >
              <g clip-path="url(#clip0_1_23)">
                <path
                  d="M34.1177 0.0527344H36.3073V18.6794H34.4114L34.1177 16.497C33.2096 17.7473 31.7414 18.8385 29.4464 18.8385C25.6816 18.8385 22.9062 16.3109 22.9062 11.8936C22.9062 7.74204 25.6831 4.94879 29.4464 4.94879C31.7429 4.94879 33.291 5.88088 34.1177 7.18369V0.0527344ZM34.1448 11.9462C34.1448 8.9653 32.3287 6.89101 29.6602 6.89101C26.9918 6.89101 25.1485 8.93979 25.1485 11.8936C25.1485 14.8475 26.9631 16.8963 29.6602 16.8963C32.3573 16.8963 34.1448 14.8475 34.1448 11.9477V11.9462Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M36.8401 11.8931C36.8401 7.7685 39.4558 4.94824 43.3004 4.94824C47.145 4.94824 49.6538 7.36926 49.7607 11.3873C49.7607 11.68 49.7336 11.9997 49.708 12.3178H39.1366V12.504C39.2164 15.0856 40.8458 16.8942 43.4344 16.8942C45.3559 16.8942 46.8513 15.8826 47.3061 14.1265H49.5213C48.9867 16.8402 46.7444 18.8364 43.594 18.8364C39.51 18.8364 36.8401 16.0432 36.8401 11.8916V11.8931ZM47.4115 10.5092C47.1977 8.16775 45.5969 6.86344 43.3275 6.86344C41.3246 6.86344 39.4829 8.29984 39.2691 10.5092H47.4115Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M62.4688 11.1216V18.6788H60.2792V11.2552C60.2792 8.43492 58.9705 6.94449 56.5957 6.94449C54.0327 6.94449 52.4846 8.83417 52.4846 11.8931V18.6788H50.295V5.10884H52.191L52.4846 6.94449C53.2857 5.90734 54.6742 4.94824 56.9692 4.94824C60.0397 4.94824 62.4688 6.62479 62.4688 11.1216Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M64.9787 14.2088C65.0585 15.8058 66.4741 16.9766 68.7435 16.9766C70.665 16.9766 72.0263 16.1511 72.0263 14.9008C72.0263 13.1972 70.531 13.0651 68.5025 12.825C65.4591 12.4527 63.0301 11.8404 63.0301 9.02009C63.0301 6.54505 65.2995 4.92253 68.37 4.94955C71.4662 4.97657 73.7099 6.41297 73.9223 9.23323H71.68C71.5204 7.84936 70.2388 6.81222 68.37 6.81222C66.5012 6.81222 65.1926 7.61071 65.1926 8.861C65.1926 10.3514 66.6337 10.5375 68.6094 10.7762C71.7056 11.1484 74.1888 11.7338 74.1888 14.7402C74.1888 17.2677 71.7598 18.8377 68.7435 18.8377C65.2197 18.8377 62.7906 17.1882 62.7364 14.2073H64.9787V14.2088Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M75.4181 1.41088C75.4181 0.585366 76.0325 0 76.8336 0C77.6348 0 78.2492 0.585366 78.2492 1.41088C78.2492 2.2364 77.6348 2.82176 76.8336 2.82176C76.0325 2.82176 75.4181 2.2364 75.4181 1.41088ZM75.7117 5.10919H77.9013V18.6792H75.7117V5.10919Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M80.9953 7.10431H78.5392V5.10807H80.9953V1.30469H83.1849V5.10957H86.7087V7.10581H83.1849V15.1148C83.1849 16.2585 83.5854 16.6848 84.76 16.6848H86.9225V18.681H84.5462C81.9305 18.681 80.9953 17.5373 80.9953 15.1418V7.10431Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M87.0841 5.10938H89.4062L93.5971 15.9386L97.6555 5.10938H99.9776L93.704 20.9683C92.8502 23.1507 92.3427 24.0017 90.4212 24.0017H87.8054V22.0054H89.754C91.0085 22.0054 91.2223 21.6857 91.7298 20.4084L92.3969 18.7589L87.0841 5.10938Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M1.75532 3.21973H0.252427C0.12601 3.21973 0.0235291 3.32187 0.0235291 3.44787V4.94581C0.0235291 5.07181 0.12601 5.17395 0.252427 5.17395H1.75532C1.88174 5.17395 1.98422 5.07181 1.98422 4.94581V3.44787C1.98422 3.32187 1.88174 3.21973 1.75532 3.21973Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M4.46661 3.21973H3.00438C2.87788 3.21973 2.77548 3.32179 2.77548 3.44787V4.94581C2.77548 5.07188 2.87788 5.17395 3.00438 5.17395H4.46661C4.6157 5.17395 4.73617 5.05387 4.73617 4.90528V3.4899C4.73617 3.3413 4.6157 3.22123 4.46661 3.22123V3.21973Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M7.25532 3.21973H5.75243C5.62601 3.21973 5.52353 3.32187 5.52353 3.44787V4.94581C5.52353 5.07181 5.62601 5.17395 5.75243 5.17395H7.25532C7.38174 5.17395 7.48422 5.07181 7.48422 4.94581V3.44787C7.48422 3.32187 7.38174 3.21973 7.25532 3.21973Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M10.0074 3.21973H8.5045C8.37809 3.21973 8.2756 3.32187 8.2756 3.44787V4.94581C8.2756 5.07181 8.37809 5.17395 8.5045 5.17395H10.0074C10.1338 5.17395 10.2363 5.07181 10.2363 4.94581V3.44787C10.2363 3.32187 10.1338 3.21973 10.0074 3.21973Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M12.767 5.94434H11.2641C11.1377 5.94434 11.0352 6.04648 11.0352 6.17248V7.67041C11.0352 7.79641 11.1377 7.89856 11.2641 7.89856H12.767C12.8935 7.89856 12.9959 7.79641 12.9959 7.67041V6.17248C12.9959 6.04648 12.8935 5.94434 12.767 5.94434Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M10.0073 5.94434H8.50438C8.37796 5.94434 8.27548 6.04648 8.27548 6.17248V7.67041C8.27548 7.79641 8.37796 7.89856 8.50438 7.89856H10.0073C10.1337 7.89856 10.2362 7.79641 10.2362 7.67041V6.17248C10.2362 6.04648 10.1337 5.94434 10.0073 5.94434Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M7.25532 5.94434H5.75243C5.62601 5.94434 5.52353 6.04648 5.52353 6.17248V7.67041C5.52353 7.79641 5.62601 7.89856 5.75243 7.89856H7.25532C7.38174 7.89856 7.48422 7.79641 7.48422 7.67041V6.17248C7.48422 6.04648 7.38174 5.94434 7.25532 5.94434Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M4.50727 5.94388H3.04504C2.89595 5.94388 2.77548 6.06396 2.77548 6.21255V7.62794C2.77548 7.77653 2.89595 7.8966 3.04504 7.8966H4.50727C4.63377 7.8966 4.73617 7.79454 4.73617 7.66846V6.17053C4.73617 6.04445 4.63377 5.94238 4.50727 5.94238V5.94388Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M1.75532 5.94434H0.252427C0.12601 5.94434 0.0235291 6.04648 0.0235291 6.17248V7.67041C0.0235291 7.79641 0.12601 7.89856 0.252427 7.89856H1.75532C1.88174 7.89856 1.98422 7.79641 1.98422 7.67041V6.17248C1.98422 6.04648 1.88174 5.94434 1.75532 5.94434Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M1.71452 8.66797H0.292949C0.144077 8.66797 0.0233917 8.78826 0.0233917 8.93664V10.3535C0.0233917 10.5019 0.144077 10.6222 0.292949 10.6222H1.71452C1.8634 10.6222 1.98408 10.5019 1.98408 10.3535V8.93664C1.98408 8.78826 1.8634 8.66797 1.71452 8.66797Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M4.50727 8.66849H3.04504C2.89595 8.66849 2.77548 8.78857 2.77548 8.93716V10.3525C2.77548 10.5011 2.89595 10.6212 3.04504 10.6212H4.50727C4.63377 10.6212 4.73617 10.5191 4.73617 10.3931V8.89513C4.73617 8.76906 4.63377 8.66699 4.50727 8.66699V8.66849Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M7.25532 8.66797H5.75243C5.62601 8.66797 5.52353 8.77011 5.52353 8.89611V10.394C5.52353 10.52 5.62601 10.6222 5.75243 10.6222H7.25532C7.38174 10.6222 7.48422 10.52 7.48422 10.394V8.89611C7.48422 8.77011 7.38174 8.66797 7.25532 8.66797Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M10.0074 8.66797H8.5045C8.37809 8.66797 8.2756 8.77011 8.2756 8.89611V10.394C8.2756 10.52 8.37809 10.6222 8.5045 10.6222H10.0074C10.1338 10.6222 10.2363 10.52 10.2363 10.394V8.89611C10.2363 8.77011 10.1338 8.66797 10.0074 8.66797Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M12.767 8.66797H11.2641C11.1377 8.66797 11.0352 8.77011 11.0352 8.89611V10.394C11.0352 10.52 11.1377 10.6222 11.2641 10.6222H12.767C12.8935 10.6222 12.9959 10.52 12.9959 10.394V8.89611C12.9959 8.77011 12.8935 8.66797 12.767 8.66797Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M15.517 8.66797H14.0141C13.8877 8.66797 13.7852 8.77011 13.7852 8.89611V10.394C13.7852 10.52 13.8877 10.6222 14.0141 10.6222H15.517C15.6435 10.6222 15.7459 10.52 15.7459 10.394V8.89611C15.7459 8.77011 15.6435 8.66797 15.517 8.66797Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M15.517 11.3926H14.0141C13.8877 11.3926 13.7852 11.4947 13.7852 11.6207V13.1187C13.7852 13.2447 13.8877 13.3468 14.0141 13.3468H15.517C15.6435 13.3468 15.7459 13.2447 15.7459 13.1187V11.6207C15.7459 11.4947 15.6435 11.3926 15.517 11.3926Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M12.767 11.3926H11.2641C11.1377 11.3926 11.0352 11.4947 11.0352 11.6207V13.1187C11.0352 13.2447 11.1377 13.3468 11.2641 13.3468H12.767C12.8935 13.3468 12.9959 13.2447 12.9959 13.1187V11.6207C12.9959 11.4947 12.8935 11.3926 12.767 11.3926Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M10.0073 11.3926H8.50438C8.37796 11.3926 8.27548 11.4947 8.27548 11.6207V13.1187C8.27548 13.2447 8.37796 13.3468 8.50438 13.3468H10.0073C10.1337 13.3468 10.2362 13.2447 10.2362 13.1187V11.6207C10.2362 11.4947 10.1337 11.3926 10.0073 11.3926Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M7.25532 11.3926H5.75243C5.62601 11.3926 5.52353 11.4947 5.52353 11.6207V13.1187C5.52353 13.2447 5.62601 13.3468 5.75243 13.3468H7.25532C7.38174 13.3468 7.48422 13.2447 7.48422 13.1187V11.6207C7.48422 11.4947 7.38174 11.3926 7.25532 11.3926Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M4.50727 11.3921H3.04504C2.89595 11.3921 2.77548 11.5122 2.77548 11.6608V13.0762C2.77548 13.2248 2.89595 13.3448 3.04504 13.3448H4.50727C4.63377 13.3448 4.73617 13.2428 4.73617 13.1167V11.6188C4.73617 11.4927 4.63377 11.3906 4.50727 11.3906V11.3921Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M1.75532 11.3926H0.252427C0.12601 11.3926 0.0235291 11.4947 0.0235291 11.6207V13.1187C0.0235291 13.2447 0.12601 13.3468 0.252427 13.3468H1.75532C1.88174 13.3468 1.98422 13.2447 1.98422 13.1187V11.6207C1.98422 11.4947 1.88174 11.3926 1.75532 11.3926Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M1.75518 14.1162H0.252289C0.125873 14.1162 0.0233917 14.2184 0.0233917 14.3444V15.8423C0.0233917 15.9683 0.125873 16.0704 0.252289 16.0704H1.75518C1.8816 16.0704 1.98408 15.9683 1.98408 15.8423V14.3444C1.98408 14.2184 1.8816 14.1162 1.75518 14.1162Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M4.46626 14.1109H3.00402C2.85494 14.1109 2.73447 14.231 2.73447 14.3795V15.7949C2.73447 15.9435 2.85494 16.0636 3.00402 16.0636H4.46626C4.59275 16.0636 4.69516 15.9615 4.69516 15.8355V14.3375C4.69516 14.2114 4.59275 14.1094 4.46626 14.1094V14.1109Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M7.25532 14.1162H5.75243C5.62601 14.1162 5.52353 14.2184 5.52353 14.3444V15.8423C5.52353 15.9683 5.62601 16.0704 5.75243 16.0704H7.25532C7.38174 16.0704 7.48422 15.9683 7.48422 15.8423V14.3444C7.48422 14.2184 7.38174 14.1162 7.25532 14.1162Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M10.0074 14.1162H8.5045C8.37809 14.1162 8.2756 14.2184 8.2756 14.3444V15.8423C8.2756 15.9683 8.37809 16.0704 8.5045 16.0704H10.0074C10.1338 16.0704 10.2363 15.9683 10.2363 15.8423V14.3444C10.2363 14.2184 10.1338 14.1162 10.0074 14.1162Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M12.767 14.1162H11.2641C11.1377 14.1162 11.0352 14.2184 11.0352 14.3444V15.8423C11.0352 15.9683 11.1377 16.0704 11.2641 16.0704H12.767C12.8935 16.0704 12.9959 15.9683 12.9959 15.8423V14.3444C12.9959 14.2184 12.8935 14.1162 12.767 14.1162Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M10.0073 16.8389H8.50438C8.37796 16.8389 8.27548 16.941 8.27548 17.067V18.5649C8.27548 18.6909 8.37796 18.7931 8.50438 18.7931H10.0073C10.1337 18.7931 10.2362 18.6909 10.2362 18.5649V17.067C10.2362 16.941 10.1337 16.8389 10.0073 16.8389Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M7.25532 16.8389H5.75243C5.62601 16.8389 5.52353 16.941 5.52353 17.067V18.5649C5.52353 18.6909 5.62601 18.7931 5.75243 18.7931H7.25532C7.38174 18.7931 7.48422 18.6909 7.48422 18.5649V17.067C7.48422 16.941 7.38174 16.8389 7.25532 16.8389Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M4.50727 16.8394H3.04504C2.89595 16.8394 2.77548 16.9595 2.77548 17.1081V18.5234C2.77548 18.672 2.89595 18.7921 3.04504 18.7921H4.50727C4.63377 18.7921 4.73617 18.69 4.73617 18.564V17.066C4.73617 16.94 4.63377 16.8379 4.50727 16.8379V16.8394Z"
                  fill="#E2FF6F"
                />
                <path
                  d="M1.75532 16.8389H0.252427C0.12601 16.8389 0.0235291 16.941 0.0235291 17.067V18.5649C0.0235291 18.6909 0.12601 18.7931 0.252427 18.7931H1.75532C1.88174 18.7931 1.98422 18.6909 1.98422 18.5649V17.067C1.98422 16.941 1.88174 16.8389 1.75532 16.8389Z"
                  fill="#E2FF6F"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_23">
                  <rect
                    width="99.9529"
                    height="24"
                    fill="white"
                    transform="translate(0.0235291)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          {/* <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <div class="font-medium flex items-center justify-end p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700 gap-14">
              <div className="font-medium flex items-center justify-center  border border-gray-100 rounded-lg  md:flex-row gap-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                <div>
                  <a
                    href="#"
                    class="block py-2 px-3 text-white  rounded md:bg-transparent md:p-0 dark:text-white text-sm"
                    aria-current="page"
                  >
                    Career
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-sm md:p-0 dark:text-white   dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Blogs
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-sm  md:p-0 dark:text-white   dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Leaderboard
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-sm  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Fees
                  </a>
                </div>
              </div>
              <div className="px-8 py-4 rounded-lg navBtn font-bold">
                <a href="#" class="block   rounded-lg text-black   text-sm   ">
                  TRADE NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
