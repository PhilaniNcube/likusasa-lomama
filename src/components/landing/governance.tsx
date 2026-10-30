const governance = [
  ["Chairperson", "Mr. Lizo Skenjane"],
  ["Secretary", "Ms. Phaphama Njemla"],
  ["Treasurer", "Mrs. Nobendiba Tyutu"],
  ["Additional member", "Mrs. Daniswa Ndayi"],
  ["Additional member", "Mrs. Lungiswa Khuhlana"],
  ["Project coordinator", "Mrs. Pumla Dyafta"],
  ["Finance officer", "Ms. Nontyatyambo Ruda"],
  ["Administrator", "Ms. Lukhona Sizani"],
];

export function Governance() {
  return (
    <section aria-labelledby="governance" className="bg-muted">
      <div className="container-page grid gap-x-8 gap-y-12 py-24 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2
            id="governance"
            className="max-w-[14ch] font-heading text-section font-semibold"
          >
            Who runs our work.
          </h2>
          <p className="mt-6 max-w-[42ch] text-muted-foreground">
            Our board of office-bearers and additional members guides the
            project, while our coordinator, finance officer and administrator
            run day-to-day work.
          </p>
        </div>

        <table
          aria-label="Governance and management"
          className="w-full border-y border-border text-left text-sm lg:col-span-6 lg:col-start-7"
        >
          <tbody>
            {governance.map(([role, name]) => (
              <tr
                key={`${role}-${name}`}
                className="border-b border-border last:border-b-0"
              >
                <th
                  scope="row"
                  className="w-1/2 py-3 pr-4 align-top font-normal text-muted-foreground"
                >
                  {role}
                </th>
                <td className="py-3 align-top font-medium">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
