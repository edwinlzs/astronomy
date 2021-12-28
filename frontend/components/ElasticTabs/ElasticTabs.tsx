// inspired by and references https://codepen.io/nenadkaevik/pen/odyrGm
import { CSSProperties, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import styles from './ElasticTabs.module.scss';

type ElasticTabsProps = {
    tabs: string[],
    selected: string,
    setSelected: Dispatch<SetStateAction<string>>,
}

const ElasticTabs = ({ tabs, selected, setSelected }: ElasticTabsProps) => {
    const activeRef = useRef<HTMLDivElement>(null)
    const [activeStyles, setActiveStyles] = useState<CSSProperties>({ left: '0px', width: '0px', color: '#fff' })

    useEffect(() => {
        const divElement = activeRef.current;
        console.log(activeRef)
        setActiveStyles({
            left: divElement?.offsetLeft,
            width: divElement ? divElement.offsetWidth + 1 : '0px',
        })
    }, [selected])

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                <div className={styles.selector} style={activeStyles} />
                {tabs.map((tab: string, index: number) =>
                    <div
                        className={`${styles.tab} ${tab === selected ? styles.active : ""}`}
                        key={index}
                        ref={tab === selected ? activeRef : undefined}
                        onClick={() => {
                            setSelected(tab);
                        }}
                    >
                        {tab}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ElasticTabs;