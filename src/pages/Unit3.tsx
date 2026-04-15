import RouterLink from "../components/RouterLink";

function Unit3(){
    return(
        <>
            <h2 id="3.1">Power Supplies and Cooling</h2>
                <h3 id="3.1-1">Power Supply Units</h3>
                <ul className="ul-hidden ul-flat">
                    <li className="definition">
                        <b>Power Supply Unit (PSU):</b> delivers low-voltage DC to power PC components from AC input. 
                        Most PSUs will have an auto-switch for different outlet output in different countries, but some have to be manually swapped.
                        <ul className="ul-hidden">
                            <li>
                                PSUs will have multiple connectors to power devices at 3.3V, 5V, and 12V. They will have cables for powering the motherboard, fans, and adapter cards.
                            </li>
                            <li className="definition">
                                <b>Wattage Rating:</b> used to express combined power requirements of a PC's components.
                            </li>
                            <li className="definition">
                                <b>Power:</b> rage at which energy is generated or use, measured in Watts (W).
                            </li>
                            <li className="definition">
                                <b>Energy Efficiency:</b> PSUs will lose some energy as heat while converting AC to DC. 
                                <ul className="ul-hidden">
                                    <li className="definition">
                                        <b>80 PLUS Program:</b> program that rates PSU efficiency. 
                                        Rating goes 80 PLUS, Bronze, Silver, Gold, Platinum, Titanium, in order of increasing efficiency
                                    </li>
                                </ul>
                            </li>
                            <li className="definition">
                                <b>Modular PSU:</b> PSU with detachable power cables to reduce clutter.
                            </li>
                            <li className="definition">
                                <b>Redundant PSUs:</b> PSU setup with multiple PSUs, so if one fails the other takes over full load to protect against data loss.
                            </li>
                        </ul>
                    </li>

                    <h3 id="3.1-2">Cooling Systems</h3>
                    <ul className="ul-flat ul-hidden">
                        <li className="definition">
                            <b>Passive Heat Sink:</b> heat sink system with no fan, relying on increased surface area or passive air to cool.
                        </li>
                        <li className="definition">
                            <b>Active Heat Sink:</b> heat sink system that typically uses a fan to cool components generating more heat, like high-end graphics cards or CPUs. 
                            <ul>
                                <li className="definition">
                                    <b>Fans:</b> devices that improve airflow to dissipate heat from a component.
                                </li> 
                                <li className="definition">
                                    <b>Liquid Cooling Systems:</b> cooling system found in high-end systems that pump water around chassis for more effective cooling than air.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </ul>

            <h2 id="3.2">Storage Devices</h2>
                <ul className="ul-flat ul-hidden">
                    <li className="definition">
                        <b>Nonvolatile Memory (Mass Storage):</b> used for long term storage; doesn't lose information when device is powered off. 
                        Contrasts to volatile memory (EX, <RouterLink href="/unit2" bodyText="RAM" />).
                    </li>
                    <li className="definition">
                        <b>Hard Drive (HDD):</b> a magnetic storage device that stores data on platters with a spindle for reading on platters. 
                        Performance is limited as when data is read a platter has to spin to its location. Subject to data loss from breaking moving parts.
                    </li>
                    <li className="definition">
                        <b>Solid State Drive (SSD):</b> a storage device that uses flash memory modules. 
                        More expensive than an HDD and cannot store as much data, but generally faster and more expensive. 
                        Can connect to motherboard via SATA, PCIe, Serial Attached SCSI (SAS), M.2/NVME interface.
                    </li>
                </ul>

                <h3 id="3.2-1">RAID</h3>
                <ul className="ul-flat ul-hidden">
                    <li className="definition">
                        <b>Redundant Array of Independent Disks:</b> methods of configuring multiple hard drives to mitigate chances of data loss. 
                        Multiple levels of RAID exist:
                        <ul>
                            <li className="definition">
                                <b>RAID 0:</b> striping without parity. 2+ disks. Improves performance by dividing data into blocks and distributing them across all disks. No redundancy.
                            </li>
                            <li className="definition">
                                <b>RAID 1:</b> mirroring. 2+ disks. Each disk has a copy of itself. Protects against failure of a single disk, but only utilizes 50% of total available disk space.
                            </li>
                            <li className="definition">
                                <b>RAID 5:</b> striping with distributed parity. 3+ disks. Besides being striped, data also is stored with a parity bit that can be used to rebuild information if a drive fails. 
                                Utilizes (n-1)/n amount of total available storage (where n is the number of disks), as 1/n is used to store parity. 
                            </li>
                            <li className="definition">
                                <b>RAID 6:</b> striping with double parity. 4+ disks. Data has 2 separate storages for parity bits. Can tolerate failure of 2 disks.
                            </li>
                            <li className="definition">
                                <b>RAID 10:</b> stripe of mirrors. 4+ disks. Combines RAID 0 and 1. Excellent fault tolerance, but only utilizes 50% of total available disk space.
                            </li>
                        </ul>
                    </li>
                </ul>

                <h3 id="3.2-2">Removable Storage Devices</h3>
                <ul className="ul-flat ul-hidden">
                    <li className="definition">
                        <b>Drive Enclosures:</b> allow HDDs and SSDs to be used as removable storage by putting them in an enclosure that provides a data interface for external storage.
                    </li>
                    <li className="definition">
                        <b>Portable Flash Drive:</b> common storage device using magnet or flash memory.
                    </li>
                    <li className="definition">
                        <b>Network Attached Storage:</b> an external storage device usually with multiple HDDs/SSDs connected to a network so many people can access it.
                    </li>
                    <li className="definition">
                        <b>Memory Card:</b> card external storage device that requires a card reader to be used.
                    </li>
                    <li className="definition">
                        <b>Optical Drives:</b> developed originally for music, external storage where a laser encodes data onto a disk surface. Data can be made unreadable by scratches.
                        <ul>
                            <li><b>CD:</b> recordable (CD-R) and writable (CD-W). Lower transfer rates.</li>
                            <li><b>DVD:</b> About 9x faster transfer rate than a CD. Has varieties DVD+R/RW and DVD-R/RW. Most drives support both.</li>
                            <li><b>Blue-Ray:</b> highest transfer speed of optical disks; read only (BD-ROM) or rewriteable (BD-RE).</li>
                        </ul>
                    </li>
                </ul>

            <h2 id="3.3">System Memory</h2>
                <ul className="ul-hidden ul-flat">
                    <li className="definition">
                        <b>Volatile Memory:</b> memory that erases when power is lost. Faster than nonvolatile storage devices.
                        <ul className="ul-hidden">
                            <li>RAM has evolved over time:
                                <ul>
                                    <li className="definition">
                                        <b>Dynamic RAM (DRAM):</b> RAM system that stores data bits as electrical charges where a charged capacitor is 1 and otherwise is 0.
                                    </li>
                                    <li className="definition">
                                        <b>Synchronous DRAM (SDRAM):</b> older RAM system that would synch data transfers with system clock to ensure memory is timed with CPU instructions.
                                    </li>
                                    <li className="definition">
                                        <b>Double Data Rate (DDR) SRAM:</b> RAM system that doubles SDRAM transfer rate by transmitting data on both rising and falling edges of a clock cycle.
                                    </li>
                                </ul>
                            </li>
                            <li>As CPUs advanced faster than memory, dual-channel memory was introduced.
                                <ul>
                                    <li className="definition">
                                        <b>Single Channel Memory:</b> memory with one 64-bit data bus between CPU, memory controller, and RAM. 
                                    </li>
                                    <li className="definition">
                                        <b>Dual Channel:</b> memory with 2 64-bit pathways for a total of 128 bits of data per transfer. 
                                        Motherboards supporting dual channel often have 4 <RouterLink href="/unit2" bodyText="DIMM" /> slots with each pair representing one channel.
                                    </li>
                                </ul>
                            </li>
                            <li className="definition">
                                <b>Error Correction Code (ECC) RAM:</b> can detect and correct single-bit memory errors to prevent system crashes. Found in work stations where high-reliability is critical.
                            </li>
                        </ul>
                    </li>
                </ul>

            <h2 id="3.4">CPUs</h2>
                <ul className="ul-hidden ul-flat">
                    <li className="definition">
                        <b>Central Processing Unit (CPU):</b> executes program instruction code.
                    </li>
                    <li>Instructions are executed in order:
                        <ol>
                            <li>
                                <b>Fetch:</b> fetches next instruction in sequence from memory into pipeline
                            </li>
                            <li>
                                <b>Decode:</b> instruction is decoded and is either executed or passed to arithmetic logic unit (ALU) or floating-point unit (FPU)
                            </li>
                            <li>
                                <b>Executed:</b> done either by CPU, ALU, or FPU
                            </li>
                            <li>
                                <b>Write Back:</b> results of instruction are written back to register (a storage area in the CPU), cache (storage area near CPU), or RAM
                            </li>
                        </ol>
                    </li>
                    <li className="definition">
                        <b>Reduced Instruction Set Computing (RISC):</b> instruction set using a small, optimized set of instructions for faster execution.
                    </li>
                    <li className="definition">
                        <b>Complex Instruction Set Computing (CISC):</b> uses larger instruction set for more complex operations to simpify programming. Enhances general performance.
                    </li>
                    <li>Different CPU architectures:
                        <ul>
                            <li className="definition">
                                <b>x86 CPU Architecture:</b> a CISC CPU architecure with a 32-bit instruction set. Standard for CPUs through the 90's.
                            </li>
                            <li className="definition">
                                <b>x64 (x86-64) CPU Architecture:</b> a 64-bit extension of x86 architecture standard in modern software. Able to run 32-bit software. Better performance than 32-bit systems.
                            </li>
                            <li className="definition">
                                <b>Advanced RISC Machines (ARM) Architecture:</b> CPU architecture widely used in Apple (M1/M2 chips), most Androids, Chromebooks, and some Windows lapotps and tablets. 
                                Have low power consumption, so efficient on cooling.
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3 id="3.4-1">CPU Features</h3>
                    <ul className="ul-hidden ul-flat">
                        <li>
                            <b>Clock Speed:</b> speed at which CPU runs.
                        </li>
                        <li className="definition">
                            <b>Multi-Threading:</b> allows multiple instruction streams to be processed concurrently by a CPU to reduce idle time.
                        </li>
                        <li className="definition">
                            <b>Symmetric Multiprocessing (SMP):</b> system where there are 2+ CPUs in a system, allowing dasks to be distributed across multiple CPUs.
                        </li>
                        <li className="definition">
                            <b>Chip-LEVEL Multiprocessing (CMP)/Multi-Core CPUs:</b> CPUs with multiple processing cores for better performance without multisocket complexity.
                        </li>
                        <li>
                            <b>Virtualization Support:</b> allows a single machine to run multuple OS's simulataneously.
                        </li>
                    </ul>
        </>
    )
}

export default Unit3;