import React, { useState, MouseEvent } from 'react';
import { ButtonGroup, Button, Menu, MenuItem, Typography } from '@mui/material';
import {  Language } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CustomButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  borderRadius: '21px',
  overflow: 'hidden',
  boxShadow: theme.shadows[1],
  border: '1px solid #ddd',
  backgroundColor: "#f9f8fa",
  padding: '10px 0',
  '& .MuiButton-root': {
    borderRadius: '0',
    '&:not(:last-of-type)': {
      borderRight: '1px solid #ddd', 
    },
    '&:first-of-type': {
      borderLeft: 'none',
    },
  }
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#f9f8fa',
  color: theme.palette.primary.main,
  borderRadius: '21px',
  borderRight: '1px solid #ddd',
}));

const CurrencyButtonWithMenu: React.FC = () => {
  const [currencyAnchorEl, setCurrencyAnchorEl] = useState<null | HTMLElement>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');

  const isCurrencyMenuOpen = Boolean(currencyAnchorEl);
  const isLanguageMenuOpen = Boolean(languageAnchorEl);

  const handleCurrencyClick = (event: MouseEvent<HTMLElement>) => {
    setCurrencyAnchorEl(event.currentTarget);
  };

  const handleLanguageClick = (event: MouseEvent<HTMLElement>) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleCloseCurrencyMenu = (currency?: string) => {
    if (currency) setSelectedCurrency(currency);
    setCurrencyAnchorEl(null);
  };

  const handleCloseLanguageMenu = (language?: string) => {
    if (language) setSelectedLanguage(language);
    setLanguageAnchorEl(null);
  };

  return (
    <div>
      <CustomButtonGroup variant="contained" sx={{marginX: '20px'}} aria-label="currency and language selection">
        <CustomButton
          aria-controls={isCurrencyMenuOpen ? 'currency-menu' : undefined}
          aria-haspopup="true"
          onClick={handleCurrencyClick}
        >
          <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.709 12.0142C2.67775 11.9804 2.63372 11.9343 2.59075 11.887C2.45402 11.7365 2.38726 11.5617 2.39045 11.3561C2.39543 11.0486 2.38477 10.7403 2.39507 10.4328C2.39933 10.3067 2.35281 10.2669 2.23775 10.2314C1.83752 10.1086 1.44226 9.97041 1.12939 9.67175C0.987697 9.53645 0.889327 9.37806 0.886486 9.17883C0.878673 8.66425 0.865178 8.14932 0.879028 7.63509C0.887551 7.31725 1.08287 7.09139 1.34069 6.92093C1.80733 6.61232 2.33931 6.47666 2.87591 6.36906C4.08086 6.12686 5.3025 6.07359 6.52699 6.12331C7.10371 6.14675 7.67796 6.23198 8.25326 6.28844C8.31648 6.29484 8.3804 6.29732 8.46101 6.303V4.94535C8.46101 3.87428 8.47167 2.80286 8.45569 1.7318C8.44929 1.30813 8.63254 1.02864 8.97737 0.820183C9.44862 0.53537 9.97137 0.396515 10.5026 0.296724C11.6092 0.0900397 12.7289 0.0112013 13.854 0.0509757C15.0217 0.0925256 16.1854 0.181308 17.2987 0.579761C17.6105 0.691272 17.9056 0.836519 18.1287 1.09754C18.275 1.26906 18.314 1.46154 18.3119 1.68456C18.3048 2.38807 18.3187 3.09158 18.3183 3.79509C18.3183 4.27949 18.303 4.76388 18.3037 5.24863C18.3052 6.29448 18.3155 7.34033 18.3165 8.38583C18.3172 9.01831 18.3062 9.65115 18.303 10.2836C18.3002 10.8739 18.2867 11.4648 18.3048 12.0543C18.3158 12.4176 18.1517 12.6612 17.8737 12.8523C17.4379 13.1516 16.9376 13.2919 16.4301 13.3928C15.1566 13.6456 13.8696 13.7341 12.5723 13.6542C12.5343 13.6517 12.4931 13.6666 12.4566 13.6815C12.1689 13.7983 11.8805 13.9134 11.5968 14.0391C11.5485 14.0604 11.4849 14.1346 11.4899 14.1773C11.5595 14.7799 11.2044 15.0892 10.7207 15.3122C10.1092 15.5942 9.45502 15.7167 8.79554 15.8066C7.89813 15.9288 6.99469 15.9834 6.08947 15.9476C4.95767 15.9028 3.82837 15.8215 2.74416 15.4532C2.41957 15.3431 2.10671 15.2061 1.86273 14.9514C1.72352 14.8058 1.639 14.6389 1.64007 14.4305C1.64255 13.9748 1.64575 13.5189 1.6351 13.0636C1.62728 12.728 1.76046 12.4794 2.05237 12.3242C2.26438 12.2116 2.48634 12.1182 2.70865 12.0142H2.709ZM9.20856 2.49071C9.20856 2.75634 9.20856 3.05536 9.20856 3.35473C9.20856 3.74656 9.39772 4.00533 9.77605 4.13104C10.7722 4.4606 11.806 4.54796 12.8436 4.58419C13.9722 4.62325 15.1001 4.57318 16.2074 4.33418C16.6169 4.24575 17.0107 4.08026 17.4074 3.93821C17.4656 3.91725 17.5395 3.83309 17.5409 3.77662C17.5519 3.34124 17.547 2.90585 17.547 2.49923C14.7628 3.283 11.9935 3.28655 9.2082 2.49142L9.20856 2.49071ZM17.5519 4.77169C14.7567 5.55546 11.9871 5.5583 9.20856 4.76424C9.20856 5.15203 9.20146 5.5718 9.21495 5.99085C9.21744 6.06826 9.28384 6.17409 9.35167 6.21245C9.51397 6.30443 9.69011 6.379 9.86839 6.4344C10.834 6.73484 11.833 6.82362 12.8355 6.85665C13.9644 6.89429 15.0927 6.84706 16.2003 6.60699C16.6101 6.51821 17.005 6.35592 17.4014 6.21209C17.4664 6.18865 17.5431 6.08744 17.5452 6.02032C17.5583 5.59523 17.5519 5.16908 17.5519 4.77134V4.77169ZM17.5519 6.99337C16.4436 7.43941 15.3026 7.55732 14.1551 7.60277C13.007 7.64858 11.8589 7.61272 10.7388 7.41314V8.99807C11.4405 9.04353 12.1227 9.10461 12.806 9.12769C13.9463 9.1664 15.0856 9.12237 16.2039 8.87946C16.6183 8.78961 17.0171 8.62235 17.4181 8.47674C17.477 8.45508 17.5445 8.35707 17.5463 8.29279C17.5576 7.8677 17.5523 7.44226 17.5523 6.99337H17.5519ZM10.0136 7.57117C9.84424 7.49233 9.70645 7.41314 9.55907 7.36235C8.5054 6.99941 7.40806 6.89252 6.30574 6.87654C5.52872 6.86553 4.74921 6.91915 3.9729 6.97349C3.30846 7.02001 2.65502 7.14963 2.03213 7.3968C1.89114 7.45291 1.76436 7.54524 1.61201 7.63154C1.68552 7.69085 1.71464 7.72281 1.75016 7.74127C1.83361 7.7846 1.91849 7.82686 2.0062 7.85989C2.74665 8.13689 3.52154 8.25905 4.30282 8.30877C5.06137 8.35742 5.82383 8.36168 6.58452 8.35316C7.45849 8.34357 8.32393 8.231 9.16736 7.99412C9.45715 7.9128 9.75972 7.83858 10.0136 7.57081V7.57117ZM17.5672 1.57838C17.5629 1.55104 17.5587 1.52369 17.5544 1.49599C17.434 1.4374 17.3176 1.36744 17.1922 1.32162C16.2919 0.99313 15.3494 0.881975 14.4027 0.832968C13.2868 0.774727 12.1682 0.778988 11.0637 0.974664C10.5517 1.06522 10.0502 1.22219 9.54842 1.36459C9.42803 1.39869 9.32575 1.49599 9.21495 1.56382C9.21673 1.58868 9.21886 1.61389 9.22063 1.63875C9.42874 1.72256 9.63223 1.82271 9.84637 1.88805C10.8872 2.20518 11.9615 2.3032 13.0411 2.30959C13.7776 2.31385 14.5156 2.262 15.2507 2.20731C15.8736 2.16115 16.4876 2.04431 17.0746 1.822C17.2451 1.75737 17.4035 1.66006 17.5672 1.57803V1.57838ZM12.2456 9.8692C12.2456 10.0482 12.2502 10.2183 12.2438 10.3884C12.2399 10.4893 12.274 10.5429 12.3678 10.5912C12.7016 10.7638 12.9797 10.9896 13.0177 11.3963C13.0397 11.4016 13.051 11.4069 13.0624 11.4069C14.1328 11.4271 15.1992 11.3696 16.2472 11.1473C16.6453 11.0628 17.0263 10.8962 17.411 10.7556C17.4699 10.7339 17.5441 10.6505 17.5459 10.594C17.5573 10.1586 17.5519 9.72253 17.5519 9.27649C15.831 9.91359 14.0553 9.91537 12.2456 9.8692ZM9.95894 8.56411C7.16764 9.34681 4.40616 9.34574 1.63865 8.55416C1.63865 8.56162 1.63865 8.59713 1.63865 8.63229C1.63439 9.25589 1.63332 9.26406 2.23171 9.4505C3.02968 9.69909 3.85252 9.80208 4.68458 9.85144C6.01596 9.93064 7.342 9.90294 8.65065 9.62629C9.03206 9.54568 9.4021 9.40256 9.76824 9.26371C9.85915 9.22926 9.95717 9.1071 9.97528 9.01086C10.0037 8.85993 9.96676 8.69692 9.9593 8.56375L9.95894 8.56411ZM11.4821 10.8341C8.69753 11.6193 5.93002 11.6225 3.15433 10.8241C3.15433 10.9605 3.14084 11.1331 3.16037 11.3014C3.1696 11.3806 3.225 11.4865 3.2907 11.5205C3.47715 11.6179 3.6746 11.7002 3.87595 11.7606C4.72258 12.0152 5.59726 12.1111 6.47443 12.1463C7.71489 12.196 8.95535 12.1669 10.1749 11.8988C10.5509 11.816 10.9149 11.6747 11.2786 11.5429C11.3599 11.5134 11.4601 11.4193 11.4729 11.3419C11.502 11.1654 11.4821 10.9811 11.4821 10.8341ZM2.3901 13.7792C2.3901 13.8704 2.3901 13.9759 2.3901 14.0814C2.3901 14.5203 2.40679 14.5438 2.82868 14.6965C2.84537 14.7025 2.86242 14.7068 2.87911 14.7128C3.73887 15.0139 4.63557 15.1194 5.53582 15.1649C6.85299 15.2316 8.17016 15.2082 9.46532 14.9181C9.835 14.8353 10.1923 14.6911 10.5499 14.5597C10.6884 14.5086 10.7825 14.401 10.7274 14.2614C7.92051 14.5366 5.1466 14.5732 2.39045 13.7792H2.3901ZM12.2318 12.3025C12.0986 12.3515 11.9793 12.4002 11.8571 12.44C10.8841 12.7571 9.87797 12.8633 8.86231 12.9006C8.5395 12.9123 8.21526 12.8903 7.89281 12.9059C7.04654 12.946 6.20346 12.9098 5.36394 12.8093C4.88097 12.7514 4.40225 12.6573 3.92248 12.5799C3.88306 12.9641 3.9001 13.0064 4.26553 13.1502C4.48322 13.2358 4.70908 13.3068 4.93708 13.3594C5.71481 13.5394 6.50426 13.6183 7.30223 13.657C8.5711 13.7184 9.82932 13.6563 11.0705 13.3843C11.4171 13.3083 11.7513 13.1666 12.0808 13.0298C12.1611 12.9965 12.2364 12.869 12.2502 12.7752C12.2726 12.6271 12.2414 12.4709 12.2321 12.3032L12.2318 12.3025ZM13.0102 12.9123C14.0632 12.9311 15.0934 12.8867 16.1112 12.6861C16.5544 12.5987 16.9997 12.5089 17.3946 12.2724C17.4589 12.234 17.537 12.1608 17.5445 12.0966C17.5651 11.9186 17.5516 11.7368 17.5516 11.549C16.0714 12.1008 14.5476 12.1711 13.0102 12.1601V12.9126V12.9123ZM6.77948 10.6381C6.77948 10.6444 6.77984 10.6512 6.78019 10.6576C6.93858 10.6576 7.09697 10.6626 7.25535 10.6565C7.76851 10.637 8.28274 10.6274 8.79448 10.5876C9.51184 10.5322 10.2246 10.4324 10.9086 10.1966C11.1081 10.1277 11.2949 10.0212 11.4878 9.9317C11.4832 9.90969 11.4789 9.88802 11.4743 9.866C11.4107 9.84292 11.3489 9.80883 11.2832 9.7996C11.1316 9.77793 10.9782 9.7719 10.8262 9.75343C10.6106 9.72715 10.4011 9.69128 10.2178 9.87027C10.1415 9.94484 10.0243 9.98036 9.92237 10.0258C9.35878 10.2776 8.76074 10.4022 8.15347 10.4829C7.69678 10.5436 7.2376 10.5866 6.77948 10.6377V10.6381ZM2.46325 12.9329C2.46254 12.9521 2.46219 12.9712 2.46148 12.9904C2.70403 13.0707 2.94623 13.1509 3.19375 13.2326C3.17174 13.0423 3.15362 12.8874 3.13232 12.7038C2.90468 12.782 2.68414 12.8572 2.46325 12.9329Z" fill="#452775" />
          </svg>

          <Typography variant="body2" sx={{ marginX: 1 }}>
            {selectedCurrency}
          </Typography>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.71637 9.01072L15.5623 1.91496C15.6765 1.79656 15.7409 1.63872 15.7419 1.47416C15.7429 1.30961 15.6806 1.15098 15.5678 1.03117L15.5601 1.02343C15.5055 0.965149 15.4395 0.918601 15.3663 0.886616C15.293 0.854631 15.214 0.837879 15.1341 0.83738C15.0542 0.836882 14.975 0.852646 14.9014 0.883715C14.8278 0.914783 14.7612 0.960505 14.7058 1.0181L8.25958 7.70007L1.89982 0.938188C1.84513 0.879904 1.77917 0.833356 1.70593 0.801371C1.63269 0.769385 1.55371 0.752634 1.47379 0.752135C1.39388 0.751637 1.31469 0.767401 1.24106 0.79847C1.16743 0.829538 1.10089 0.87526 1.04548 0.932857L1.03775 0.940494C0.923467 1.05889 0.85914 1.21673 0.858113 1.38128C0.857086 1.54584 0.919438 1.70447 1.03224 1.82428L7.78903 9.00494C7.84846 9.06809 7.92008 9.11851 7.99957 9.15316C8.07906 9.1878 8.16476 9.20595 8.25147 9.20649C8.33818 9.20703 8.42409 9.18996 8.50401 9.15631C8.58392 9.12266 8.65617 9.07313 8.71637 9.01072Z" fill="#452775" />
          </svg>

        </CustomButton>
        <CustomButton
          aria-controls={isLanguageMenuOpen ? 'language-menu' : undefined}
          aria-haspopup="true"
          onClick={handleLanguageClick}
        >
          <Language />
          <Typography variant="body2" sx={{ marginX: 1 }}>
            {selectedLanguage}
          </Typography>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.71637 9.01072L15.5623 1.91496C15.6765 1.79656 15.7409 1.63872 15.7419 1.47416C15.7429 1.30961 15.6806 1.15098 15.5678 1.03117L15.5601 1.02343C15.5055 0.965149 15.4395 0.918601 15.3663 0.886616C15.293 0.854631 15.214 0.837879 15.1341 0.83738C15.0542 0.836882 14.975 0.852646 14.9014 0.883715C14.8278 0.914783 14.7612 0.960505 14.7058 1.0181L8.25958 7.70007L1.89982 0.938188C1.84513 0.879904 1.77917 0.833356 1.70593 0.801371C1.63269 0.769385 1.55371 0.752634 1.47379 0.752135C1.39388 0.751637 1.31469 0.767401 1.24106 0.79847C1.16743 0.829538 1.10089 0.87526 1.04548 0.932857L1.03775 0.940494C0.923467 1.05889 0.85914 1.21673 0.858113 1.38128C0.857086 1.54584 0.919438 1.70447 1.03224 1.82428L7.78903 9.00494C7.84846 9.06809 7.92008 9.11851 7.99957 9.15316C8.07906 9.1878 8.16476 9.20595 8.25147 9.20649C8.33818 9.20703 8.42409 9.18996 8.50401 9.15631C8.58392 9.12266 8.65617 9.07313 8.71637 9.01072Z" fill="#452775" />
          </svg>

        </CustomButton>
      </CustomButtonGroup>

      <Menu
        id="currency-menu"
        anchorEl={currencyAnchorEl}
        open={isCurrencyMenuOpen}
        onClose={() => handleCloseCurrencyMenu()}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '11ch',
            marginTop: '8px',
          },
        }}
      >
        <MenuItem onClick={() => handleCloseCurrencyMenu('USD')}>USD</MenuItem>
        <MenuItem onClick={() => handleCloseCurrencyMenu('EUR')}>EUR</MenuItem>
        <MenuItem onClick={() => handleCloseCurrencyMenu('JPY')}>JPY</MenuItem>
      </Menu>

      <Menu
        id="language-menu"
        anchorEl={languageAnchorEl}
        open={isLanguageMenuOpen}
        onClose={() => handleCloseLanguageMenu()}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: '15ch',
            marginTop: '8px',
          },
        }}
      >
        <MenuItem onClick={() => handleCloseLanguageMenu('English')}>English</MenuItem>
        <MenuItem onClick={() => handleCloseLanguageMenu('Spanish')}>Spanish</MenuItem>
        <MenuItem onClick={() => handleCloseLanguageMenu('French')}>French</MenuItem>
        <MenuItem onClick={() => handleCloseLanguageMenu('Arabic')}>Arabic</MenuItem>
      </Menu>
    </div>
  );
};

export default CurrencyButtonWithMenu;
