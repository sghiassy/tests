package spouts;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Map;
import backtype.storm.spout.SpoutOutputCollector;
import backtype.storm.task.TopologyContext;
import backtype.storm.topology.IRichSpout;
import backtype.storm.topology.OutputFieldsDeclarer;
import backtype.storm.tuple.Fields;
import backtype.storm.tuple.Values;

public class WordReader implements IRichSpout {
	private SpoutOutputCollector collector;
	private FileReader fileReader;
	private boolean completed = false;
	private TopologyContext context;

	public void close() {}
	public boolean isDistributed() { return false; }
	public void ack(Object msgId) {
		System.out.println("OK:" + msgId);
	}
	public void fail(Object msgId) {
		System.out.println("FAIL:" + msgId);
	}
	public void nextTuple() {
		if(completed) { //The nextuple it is called forever, so if we have areadey read the file, we will wait and then return
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				//Do nothing
			}
			return;
		}

		String str;
		BufferedReader reader = new BufferedReader(fileReader); //Open the reader
		
		try {
			//Read all lines
			while((str = reader.readLine()) != null) {
				//By each line emmit a new value with the line as a their
				this.collector.emit(new Values(str),str);
			}
		} catch(Exception e) {
			throw new RuntimeException("Error reading tuple",e);
		} finally {
			completed = true;
		}
	}

	//We will create the file and get the collector object
	public void open(Map conf, TopologyContext context, SpoutOutputCollector collector) {
		try {
			this.context = context;
			this.fileReader = new FileReader(conf.get("wordsFile").toString());
		} catch (FileNotFoundException e) {
			throw new RuntimeException("Error reading file [" + conf.get("wordFile") + "]");
		}

		this.collector = collector;
	}

	//Declare the output field "word"
	public void declareOutputFields(OutputFieldsDeclarer declarer) {
		declarer.declare(new Fields("line"));
	}
}