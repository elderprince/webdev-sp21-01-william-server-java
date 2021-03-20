package com.example.webdevsp2101williamserverjava.models;

public class Widget {
    private Integer id;
    private String type;
    private Integer size;
    private String text;
    private String name;
    private String value;
    private String topicId;

    public Widget(String topicId, Integer id, String type, Integer size, String text) {
        this.topicId = topicId;
        this.id = id;
        this.type = type;
        this.size = size;
        this.text = text;
    }

    public String getTopicId() {
        return topicId;
    }

    public void setTopicId(String topicId) {
        this.topicId = topicId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
