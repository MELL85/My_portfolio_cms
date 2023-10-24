import React from 'react';
import { useTranslation } from 'react-i18next';

import './Copyright.scss';

const Copyright = () => {

    const { t } = useTranslation();

    return (
        <div className="copyright">
            <div className="container">
                <div className="copyright__block">
                    <div class="copyright__line-block">
                        <span class="copyright__line"></span>
                    </div>

                    <div class="copyright__title-block">
                        <p class="copyright__title">© <span>{t('copyright.name')}.</span> <span>{t('copyright.text')}.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright