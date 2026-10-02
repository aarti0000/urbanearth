import styles from "./Catalog.module.css";

export const mattressCollections = ["Organic", "Orthopaedic", "Luxury", "Hospitality"] as const;

export default function MattressCollections({ selected, onSelect }: {
  selected: string;
  onSelect: (collection: string) => void;
}) {
  return <section className={styles.mattressCollections} aria-labelledby="mattress-collections-heading">
    <div className={styles.mattressIntro}>
      <div><p className={styles.mattressEyebrow}>The art of restful living</p><h2 id="mattress-collections-heading">Find your kind of comfort.</h2></div>
      <button type="button" className={styles.allMattresses} aria-pressed={!selected} onClick={() => onSelect("")}>All mattresses <span aria-hidden="true">↗</span></button>
    </div>
    <div className={styles.mattressOptions} role="group" aria-label="Mattress collections">
      {mattressCollections.map((name, index) => <button type="button" key={name} aria-pressed={selected === name} onClick={() => onSelect(name)}>
        <span className={styles.collectionNumber}>0{index + 1}</span>
        <span>{name}</span><span className={styles.collectionArrow} aria-hidden="true">↗</span>
      </button>)}
    </div>
  </section>;
}
