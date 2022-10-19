---
layout: post
title:  "How to restore Windows EFI partition"
---
I recently plugged a second SSD into my laptop and I got the brilliant idea to install Windows 10 on it. *"Two drives, two bootloaders"* I thought. But Windows did not agree and decied to install its bootloader on the other drive 🤷‍♂️. So, when I installed Arch Linux on the first drive, I ended up with two drives and a single Linux boot loader (`systemd-boot`). The following shows how to restore the Windows EFI partition.

First, you have to resize the `Windows basic data` partition to free `100M` at the tail of the disk, where you will create an EFI partition (see later). You can use your favorite tool (GParted, `fdisk`, etc...).

Then you have to boot into the Windows live installation media and press `SHIFT+F10` when you are on the first screen to get a `CMD` shell. Execute the following commands. **Be sure** to replace `#` with the ID of your disk.

```
diskpart
list disk
select disk #
create partition efi size=100
format quick fs=fat32
assign letter=S
exit
```

Copy the boot files into the new partition with the following commands:

```
bcdboot C:\windows /s S:
exit
```

`C:` is probably the letter assigned to your live media. If not, use the right one.

Reboot and enter the boot menu. You should now see the Windows boot loader 🥳
