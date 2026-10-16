# ManicTime GNOME Extension

A GNOME Shell extension that provides active window information to [ManicTime](https://www.manictime.com/) for activity tracking on Linux.

## How it works

On Wayland, applications cannot directly query which window is focused, since the compositor isolates clients from each other.
This extension bridges that gap by exposing a D-Bus method that ManicTime can call to get the active window information from within GNOME Shell.

**Note:** This extension is only needed for Wayland sessions.
On X11, ManicTime can track the active window directly via the X11 protocol (`_NET_ACTIVE_WINDOW`), so this extension is unnecessary.

## Installation

Install from [GNOME Extensions](https://extensions.gnome.org/extension/9336/manictime-gnome-extension/).

(Requires [ManicTime for Linux](https://www.manictime.com/download/linux) installed locally.)

## Publishing a new version

Zip the contents of `src/` into `manictime-gnome-extension.zip` and upload to [GNOME Extensions](https://extensions.gnome.org/).
