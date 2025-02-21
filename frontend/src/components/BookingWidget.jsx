import React, { useEffect, useRef } from 'react';

function BookingWidget() {
    const widgetContainerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//widget.simplybook.me/v2/widget/widget.js";
        script.onload = () => {
            new SimplybookWidget({ "widget_type": "iframe", "url": "https:\/\/devign.simplybook.me", "theme": "blur", "theme_settings": { "timeline_hide_unavailable": "1", "hide_past_days": "0", "timeline_show_end_time": "0", "timeline_modern_display": "as_slots", "sb_base_color": "#284189", "display_item_mode": "block", "body_bg_color": "#ffffff", "dark_font_color": "#474747", "light_font_color": "#ffffff", "btn_color_1": "#db3732", "sb_company_label_color": "#1c316d", "hide_img_mode": "0", "sb_busy": "#c7b3b3", "sb_available": "#d6ebff" }, "timeline": "modern", "datepicker": "top_calendar", "is_rtl": false, "app_config": { "clear_session": 0, "allow_switch_to_ada": 0, "predefined": [] }, "container_id": "sbw_npi7kk" });
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div id="sbw_npi7kk" ref={widgetContainerRef}></div>
    );
}

export default BookingWidget;
