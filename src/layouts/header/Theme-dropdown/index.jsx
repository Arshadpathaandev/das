import { StyledDropdown } from '@app/styles/common';
import { Fragment, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { addWindowClass, removeWindowClass } from "@app/utils/helpers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from '@app/utils/hooks/useLocalStorage';


const themes = [
    // {
    //     theme: 'blue_theme',
    //     icon: 'blue_icon',
    //     label: 'Blue',
    // },
    // {
    //     theme: 'green_theme',
    //     icon: 'green_icon',
    //     label: 'Green',
    // },
    // {
    //     theme: 'pink_theme',
    //     icon: 'pink_icon',
    //     label: 'Pink',
    // },

    {
        theme: 'default_theme',
        icon: 'default_icon',
        label: 'Default',
    },
    {
        theme: 'light_green_theme',
        icon: 'light_green_icon',
        label: 'Light Green',
    },
    {
        theme: 'peach_theme',
        icon: 'peach_icon',
        label: 'Peach',
    },
    {
        theme: 'pale_pink_theme',
        icon: 'pale_pink_icon',
        label: 'Pale Pink',
    },
    {
        theme: 'red_theme',
        icon: 'red_icon',
        label: 'Red',
    },
    {
        theme: 'sky_blue_theme',
        icon: 'sky_blue_icon',
        label: 'Sky Blue',
    },
    {
        theme: 'gray_theme',
        icon: 'gray_icon',
        label: 'Gray',
    },
];

const LanguagesDropdown = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    // const [themeClass, setThemeClass] =useLocalStorage('theme','blue_theme');
    const [themeClass, setThemeClass] = useState('default_theme');

    useEffect(() => {
        addWindowClass(themeClass)
    }, [themeClass])

    const handleSelect = (eventKey) => {
        setThemeClass(eventKey)
        addWindowClass(eventKey)
        if (eventKey !== themeClass) {
            console.log(eventKey, themeClass)
            removeWindowClass(themeClass)
        }

        let selectedTheme = themes?.find((theme) => theme?.theme === eventKey)
        setSelectedValue(selectedTheme);
    };

    return (
        <Dropdown onSelect={handleSelect} className='colortheme-button'>
            <Dropdown.Toggle id="dropdown-basic" bsPrefix="custom-toggle">
                {/* {selectedValue?.label ? selectedValue?.label : 'Blue'} */}
                <FontAwesomeIcon icon={faPalette} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {themes?.map((theme) => {
                    return (
                        <Fragment>
                            <Dropdown.Item eventKey={theme?.theme}> <span className={theme?.icon}> </span> {theme?.label}</Dropdown.Item>
                        </Fragment>
                    )
                })}

            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguagesDropdown;
