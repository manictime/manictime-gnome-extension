import Gio from 'gi://Gio';

const MANICTIME_GNOME_EXTENSION_DBUS_INTERFACE = `
<node>
    <interface name="org.gnome.Shell.Extensions.ManicTimeGnomeExtension">
        <method name="GetActiveWindow">
            <arg type="s" direction="out" name="win"/>
        </method>
    </interface>
</node>`;

export default class ManicTimeGnomeExtension {
    enable() {
        this._dbus = Gio.DBusExportedObject.wrapJSObject(MANICTIME_GNOME_EXTENSION_DBUS_INTERFACE, this);
        this._dbus.export(Gio.DBus.session, '/org/gnome/Shell/Extensions/ManicTimeGnomeExtension');
    }
    
    disable() {
        this._dbus.flush();
        this._dbus.unexport();
        delete this._dbus;
    }

    GetActiveWindow() {
        let active_window = global.get_window_actors()
            .map(a => a.meta_window)
            .find(w => w.has_focus());

        return JSON.stringify(
            active_window && {
                wm_class: active_window.get_wm_class(),
                pid: active_window.get_pid(),
                window_id: active_window.get_id(),
                window_title: active_window.get_title()
            }
        );
    }
}
