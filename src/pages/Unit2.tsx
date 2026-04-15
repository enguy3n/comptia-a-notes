function Unit2(){
    return(
        <>
            <h2 id="2.1">Cables and Connectors</h2>
                <ul className="ul-hidden ul-flat">
                    <li className="definition">
                        <b>Peripheral Devices:</b> input/output devices
                        <ul className="ul-hidden">
                            <li className="definition">
                                <b>Bus Interface:</b> facilitate connection b/t peripheral and computer
                            </li>
                            <li className="definition">
                                <b>Hardware Port: </b> external connection for bus interface
                            </li>
                        </ul>
                    </li>
                    <li className="definition">
                        <b>Chassis:</b> case containing computer
                    </li>
                </ul>

                <h3 id="2.1-1">USBs</h3>
                    <p className="definition">
                        <b>Universal Serial Bus (USB):</b> a standard connector for connecting peripherals to a computer. 
                        Managed by a host controller that can support multiple ports on same bus. 
                        Max cable length of 3m recommended on LowSpeed/SuperSpeed devices and 5m for Full/HighSpeed ones with signal degrading over longer distances.
                    </p>
                    <p><b>USB Cable Types:</b></p>
                    <ul>
                        <li><b>Type A:</b> a common, rectangular, flat connector</li>
                        <li><b>Type B:</b> a smaller connector; has a beveled top; used in larger devices like printers</li>
                        <li><b>Type B Mini</b> a smaller connector for smaller peripherals; now rarely used</li>
                        <li><b>Type B Micro:</b> a flatter beveled connector used in mobile devices</li>
                        <li><b>Type C:</b> introduced with USB3, is compact, reversible, and durable, meant to provide a consistent interface</li>
                    </ul>
                    <p><b>USB Versions:</b></p>
                    <ul>
                        <li><b>USB1.0:</b> 1.5 Mbps low speed; 12 Mbps at full speed</li>
                        <li><b>USB2.0:</b> 480 Mbps at high speed</li>
                        <li><b>USB 3.0</b> Gen 2 max data transfer rate 10 Gbps</li>
                    </ul>

                <h3 id="2.1-2">Displays</h3>
                    <h4>Display Types</h4>
                    <ul className="ul-hidden ul-flat">
                        <li className="definition">
                            <b>Liquid Crystal (LCD):</b> most common type of display; uses a backlight; has several subtypes:
                            <ul>
                                <li className="definition">
                                    <b>In-Plan Switching (IPS):</b> superior color accuracy and wide viewing angles, but slower response times
                                </li>
                                <li className="definition">
                                    <b>Twisted-Nematic (TN):</b> faster response times but poor color reproduction and limited viewing angles
                                </li>
                                <li className="definition">
                                    <b>Vertical Alignment (VA):</b> better color accuracy and viewing angles than TN, and sometimes better response times than IPS
                                </li>
                            </ul>
                        </li>
                        <li className="definition">
                            <b>Organic Light-Emitting Diode (OLED):</b> has pixels that omit their own light when a current is applied. 
                            Good color accuracy, contrast, efficiency, and has ability to display true blacks. 
                            Has risks of screen burn-in.
                        </li>
                        <li className="definition">
                            <b>Mni-LED:</b> backlighting consists of thosuands of tiny LEDs. Precise control over brightness/contrast, better color accuracy, thin and lightweight. 
                            More expensive and power-intensive than OLED and adds complexity to manufacturing.
                        </li>
                    </ul>

                    <h4>Display Features</h4>
                        <ul className="ul-hidden ul-flat">
                            <li className="definition">
                                <b>Inverter:</b> used in older LCDs to convert DC to AC power for backlight. Not necessary in newer LCDs using LED.
                            </li>
                            <li className="definition">
                                <b>Pixel Density:</b> in pixels/inch (PPI). Higher density -&gt; clearer image
                            </li>
                            <li className="definition">
                                <b>Refresh Rate:</b> in Hertz (Hz). Higher -&gt; smoother motion.
                            </li>
                            <li className="definition">
                                <b>Frame Rate:</b> describes video source. Should match or be multiple of refresh rate to avoid artifacts.
                            </li>
                            <li className="definition">
                                <b>Resolution:</b> describes detail of display.
                            </li>
                            <li className="definition">
                                <b>Color Gamut:</b> describes range of colors displayable by a monitor. Wider gamut -&gt; more vibrant.
                            </li>
                            <li className="definition">
                                <b>Video Cable Bandwidth:</b> bandwidth needed by a cable to support a particular resolution at a particular refresh rate.
                            </li>
                        </ul>

                    <h4>Video Cable Types</h4>
                        <ul className="ul-hidden ul-flat">
                            <li className="definition">
                                <b>HDMI:</b> able to transmit high-def video and audio signals. Standard in TVs, monitors, gaming consoles
                            </li>
                            <li className="definition">
                                <b>DisplayPort:</b> good performance at high resolutions and in multi-display configurations, so good for demanding visual applications. 
                                Higher resolutions and refresh rate supports than HDMI. Allows for daisy-chaining; IE, multiple displays to connect through a single port. 
                                Able to transmit audio.
                            </li>
                            <li className="definition">
                                <b>Digital Visual Interface (DVI):</b> a legacy video cable in older systems that's no longer being developed.
                                <ul>
                                    <li>
                                        <b>DVI-D:</b> digital input only
                                    </li>
                                    <li>
                                        <b>DVI-A:</b> analog input only
                                    </li>
                                    <li>
                                        <b>DVI-I:</b> both digital and analog input
                                    </li>
                                </ul>
                            </li>
                            <li className="definition">
                                <b>Video Graphics Array Interface (VGA):</b> 15-pin legacy video cable being phased out of systems.
                            </li>
                        </ul>

                <h3 id="2.1-3">Other Cable/Connector Types</h3>
                    <ul className="ul-hidden ul-flat">
                        <li className="definition">
                            <b>Thunderbolt:</b> can be used as a display interface and for general peripherals like USB. Associated with Apple but increasingly supported by Windows/Linux devices. 
                            Thunderbolt 3+ has USB-C interface. Thunderbolt 5 supports daisy-chaining.
                        </li>
                        <li className="definition">
                            <b>Lightning: </b> Apple proprietary interface that can transfer data and power. Being phased out for USB-C standard.
                        </li>
                        <li className="definition">
                            <b>Serial Advanced Technology Attachment (SATA):</b> standard for connecting internal storage in desktop PCs. 
                            <ul className="ul-hidden">
                                <li>
                                    Each SATA interface has two cables:
                                    <ul>
                                        <li><b>7-pin:</b> data connector. Can support a single device only. </li>
                                        <li><b>15-pin:</b> power connector </li>
                                    </ul>
                                </li>
                                <li>
                                    SATA revisions:
                                    <ul>
                                        <li><b>Original:</b> supported 150 Mbps</li>
                                        <li><b>Revision 2:</b> 300 Mbps</li>
                                        <li><b>Revision 3:</b> 600 Mbps</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="definition">
                            <b>Molex Power Connector:</b> used in legacy components to supply power to drives; mostly replaced by SATA power cable.
                        </li>
                        <li className="definition">
                            <b>External SATA (eSATA):</b> allows peripheral data devices to connect with a cable up to 2m in length. 
                            USB more commonly used for external drives over eSATA.
                        </li>
                        <li className="definition">
                            <b>Serial Cables:</b> a legacy connection interface that may be found in older network equipment. Commonly refered to as "Communications (COM)" port in Windows systems.
                        </li>
                    </ul>

            <h2 id="2.2">Motherboards</h2>
            <ul className="ul-hidden ul-flat">
                <li className="definition">
                    <b>Central Processing Unit (CPU):</b> executes instructions sent by software. Motherboards will only support certain models of CPU 
                    based on the form factor of their chipset (a piece on the motherboard managing data transfer between CPU and a device).
                    <ul className="ul-hidden ul-flat">
                        <li>To install a CPU:
                            <ol>
                                <li>
                                    <b>Align Socket:</b> ensure CPU matches motherboard socket type. Align CPU using ntoches and triangle markets.
                                </li>
                                <li>
                                    <b>Secure CPU:</b> gently place CPU into socket and secure with retention mechanism. Avoid using force.
                                </li>
                                <li>
                                    <b>Apply Thermal Paste:</b> use a small, pea-size amount of paste on the center of a PSU before attaching heat sink.
                                </li>
                                <li>
                                    <b>Install Motherboard:</b> place motherboard in case (see below).
                                </li>
                            </ol>
                        </li>
                    </ul>
                </li>
                <li className="definition">
                    <b>Random Access Memory (RAM):</b> a nonpersistent (IE, loses memory when device is powered on) memory that provides additional storage for open data files/running programs.
                    <ul className="ul-hidden">
                        <li className="definition">
                            <b>Dual Inline Memory Modules (DIMMs):</b> "package" for system RAM. Different versions (DDR3, DDR4, DDR5, etc.) have different pins. A motherboard will only be 
                            able to support certain versions of DDR.
                        </li>
                    </ul>
                </li>

                <h3 id="2.2-1">Motherboard Interfaces</h3>
                    <ul className = "ul-hidden ul-flat">
                        <li className="definition">
                            <b>M.2 Interface:</b> a flat interface used for SSDs; power is supplied through bus so no separate power cable necessary. M.2 interfaces come in different lengths so 
                            motherboard documentation should be checked when trying to find fitting cards.
                        </li>
                        <li className="definition">
                            <b>PCI Express Bus (PCIe):</b> a standard interface for modern adapter cards. Provides components with a direct connection to other components.
                            Can have different numbers of lanes (x1, x4, x8, x16). Different versions of PCIe are backwards compatible. 
                        </li>
                        <li className="definition">
                            <b>Peripheral Component Interconnect Interface (PCI):</b> a legacy component superceded by PCIe.
                        </li>
                    </ul>
                
                <h3 id="2.1-2">Motherboard Form Factors</h3>
                    <ul className = "ul-hidden ul-flat">
                        <li className="definition">
                            <b>Advanced Technology Extended (ATX):</b> standard motherboard form factor found in most desktops. Up to 7 expansion slots.
                        </li>
                        <li className="definition">
                            <b>Micro-ATX (mATX):</b> a smaller motherboard form factor with up to 4 expansion slots; can fit into cases meant for ATX cards.
                        </li>
                        <li className="definition">
                            <b>Information Technology Extended (ITX):</b> a small motherboard form factor used in home computers and mini-servers. 
                            Smaller versions exist (Mini-ITX, nano-, pico-, mobile-ITX) for embedded systems and portable devices.
                        </li>
                    </ul>

                <h3 id="2.1-3">Installing Motherboards</h3>
                <p>Step-by-step guide for basic motherboard installation.</p>
                <ol>
                    <li>
                        <b>Review Documentation:</b> check if any physical jumpers are present (most modern systems handle this through BIOS/UEFI) and need adjustment.
                    </li>
                    <li>
                        <b>Install I/O Shield:</b> if not pre-installed, align with rear I/O ports and snap into place.
                    </li>
                    <li>
                        <b>Insert Standoffs:</b> match standoffs with mounting holes on board. Ensure standoffs are only positioned where the holes are to avoid short-circuiting the board.
                    </li>
                    <li>
                        <b>Pre-Install CPU/Memory (optional)</b>: easier to do now than when motherboard is fixed into case.
                    </li>
                    <li>
                        <b>Align/Secure Motherboard:</b> place motherboard in standoffs and fasten down with screws.
                    </li>
                    <li>
                        <b>Final Assembly:</b> connect power supplies, disk drives, and any additional adapter cards to motherboard.
                    </li>
                    <li>
                        <b>Manage Cables:</b> route cables to maintain airflow and reduce clutter.
                        <ul className="ul-hidden">Connector examples:
                            <ul>
                                <li>
                                    <b>Main Power Connector:</b> a 24-pin (12x2) square pin.
                                </li>
                                <li>
                                    <b>Fan Connectors:</b> 3-pin molex KK or 4-pin molex KK.
                                </li>
                            </ul>
                        </ul>
                    </li>
                </ol>

                <h3 id="2.1-4">Expansion Cards</h3>
                <ul className="ul-hidden ul-flat">
                    <li className="definition">
                        <b>Expansion Card:</b> enhances motherboard by adding additional functons or ports. Fit into PCIe or PCI slots.
                    </li>
                    <li className="definition">
                        <b>Video Card (Graphics Adapter):</b> for more powerful graphics than integrated graphics of a CPU. 
                        Installed in PCIex16 slot with dedicated power. High-end cards may have their own memory.
                    </li>
                    <li className="definition">
                        <b>Capture Card:</b> captures video input and saves or streams it. Different cards exist for different purposes (game capture, HDMI capture, TV tuner). 
                        Connects through PCIe slot or externally via USB or Thunderbolt.
                    </li>
                    <li className="definition">
                        <b>Sound Card:</b> for providing better audio quality. High end cards may have own memory.
                    </li>
                    <li className="definition">
                        <b>Network Interface Card (NIC):</b> for upgrading Ethernet/WiFi/Bluetooth of a board, though most will have onboard Ethernet integrated into them. Connects via RJ-45 port.
                    </li>
                </ul>
            </ul>
        </>
    );
}

export default Unit2;