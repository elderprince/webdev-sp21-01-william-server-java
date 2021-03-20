package com.example.webdevsp2101williamserverjava.services;

import com.example.webdevsp2101williamserverjava.models.Widget;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class WidgetService {
    private List<Widget> widgets = new ArrayList<>();
    {
        Widget w1 = new Widget("ABC123", 123, "HEADING", 1, "Welcome to Widgets");
        Widget w2 = new Widget("ABC234", 234, "PARAGRAPH", 1, "This is a paragraph");
        Widget w3 = new Widget("ABC234", 345,"HEADING", 2, "Welcome to WebDev");
        Widget w4 = new Widget("ABC234",456,  "PARAGRAPH", 1, "Lorem ipsum");
        widgets.add(w1);
        widgets.add(w2);
        widgets.add(w3);
        widgets.add(w4);
    }

    public Widget createWidgetForTopic(Widget widget) {
        Integer id = Math.toIntExact((new Date()).getTime());
        widget.setId(id);
        widgets.add(widget);
        return widget;
    }

    public List<Widget> findWidgetsForTopic(String topicId) {
        List<Widget> ws = new ArrayList<>();
        for(Widget w: widgets) {
            if(w.getTopicId().equals(topicId)) {
                ws.add(w);
            }
        }
        return ws;
    }

    public Integer updateWidget(Integer wid, Widget widget) {
        for (int i=0; i<widgets.size(); i++) {
            Widget oldWidget = widgets.get(i);
            if (oldWidget.getId().equals(wid)) {
                widgets.set(i, widget);
                return 1;
            }
        }
        return -1;
    }

    public Integer deleteWidget(Integer wid) {
        int index = -1;
        for (int i=0; i< widgets.size(); i++) {
            Widget oldWidget = widgets.get(i);
            if (oldWidget.getId().equals(wid)) {
                return i;
            }
        }
        if (index >= 0) {
            widgets.remove(index);
            return 1;
        }
        return -1;
    }

    public List<Widget> findAllWidgets() {
        return widgets;
    }
}
